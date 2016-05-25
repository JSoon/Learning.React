import fetch from 'isomorphic-fetch'

const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'

const REQUEST_POSTS = 'REQUEST_POSTS'
const RECEIVE_POSTS = 'RECEIVE_POSTS'

//
// 用户操作的 actions
///////////////////////////////////////

// 选择要显示的 subreddit
let selectSubreddit = subreddit => {
    return {
        type: SELECT_SUBREDDIT,
        subreddit
    }
}

// 过期的 subreddit
let invalidateSubreddit = subreddit => {
    return {
        type: INVALIDATE_SUBREDDIT,
        subreddit
    }
}

//
// 网络请求控制的 actions
///////////////////////////////////////

// 请求 posts
let requestPosts = subreddit => {
    return {
        type: REQUEST_POSTS,
        subreddit
    }
}

// 接收 posts
let receivePosts = (subreddit, json) => {
    return {
        type: RECEIVE_POSTS,
        subreddit,
        posts: json.data.children.map(
            child => child.data
        ),
        receivedAt: Date.now()
    }
}

// fetch posts
let fetchPosts = (subreddit) => {
    return (dispatch, getState) => {
        dispatch(requestPosts(subreddit))
        return fetch(`http://www.subreddit.com/r/${subreddit}.json`)
            .then(response => {
                let json = response.json()
                return json
            })
            .then(json => {
                dispatch(receivePosts(subreddit, json))
            })
    }
}

export {
SELECT_SUBREDDIT,
INVALIDATE_SUBREDDIT,
REQUEST_POSTS,
RECEIVE_POSTS,

selectSubreddit,
invalidateSubreddit,
requestPosts,
receivePosts,
fetchPosts
}
