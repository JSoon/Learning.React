import { combineReducers } from 'redux'
import {
    SELECT_SUBREDDIT,
    INVALIDATE_SUBREDDIT,
    REQUEST_POSTS,
    RECEIVE_POSTS
} from './actions'

// 选择 subreddit
let selectedSubreddit = (state = 'frontend', action) => {
    switch (action.type) {
        case SELECT_SUBREDDIT:
            return action.subreddit
        default:
            return state
    }
}

// 处理 posts 请求
let posts = (state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) => {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
            return Object.assign({}, state, {
                didInvalidate: true
            })
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            })
        default:
            return state
    }
}

// 处理 subreddit 分类的 posts 请求
let postsBySubreddit = (state = {}, action) => {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            let nextState = {}
            nextState[action.subreddit] = posts(state[action.subreddit], action)
            return Object.assign({}, state, nextState)
        // return Object.assign({}, state, {
        //     [action.subreddit]: posts(state[action.subreddit], action)
        // })
        default:
            return state
    }
}

// 合并 reducers
// 也表现了 state 的根结构
const rootReducer = combineReducers({
    selectedSubreddit,
    postsBySubreddit
})

export default rootReducer
