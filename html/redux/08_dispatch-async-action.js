import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

const finalCreateStore = applyMiddleware(thunkMiddleware, logMiddleware)(createStore)
const SAY = 'SAY'

function logMiddleware({ dispatch, getState }) {
    return function(next) {
        return function(action) {
            console.log(next)
            console.log('logMiddleware action received:', action)
            return next(action)
        }
    }
}

function discardMiddleware({ dispatch, getState }) {
    return function(next) {
        return function(action) {
            console.log('discardMiddleware action received:', action)
        }
    }
}

var asyncSayActionCreator = (message) => {
    /**
     * @param {Function} dispatch 分发函数
     * @param {Function} getState 获取状态容器函数（因为你的中间件或 action creator 可能需要从 state 中读取数据）
     */
    return (dispatch, getState) => {
        setTimeout(() => {
            console.log(new Date(), 'Dispatch action now:')
            dispatch({
                type: SAY,
                message: message
            })
        }, 2000)
    }
}

var speakerReducer = (state = {}, action) => {
    console.log('speaker was called with state', state, 'and action', action)

    switch (action.type) {
        case SAY:
            return {
                ...state,
                message: action.message
            }
        default:
            return state
    }
}

var reducer = combineReducers({
    speak: speakerReducer
})

// var store = createStore(reducer)

// store.dispatch(asyncSayActionCreator('Hi'))

const store = finalCreateStore(reducer)

console.log("\n", new Date(), 'Running our async action creator:', "\n")

store.dispatch(asyncSayActionCreator('Hi'))
