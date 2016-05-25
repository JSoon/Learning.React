import React from 'react'
import { render } from 'react-dom'
import App from './components/App'

import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
// 如果除了 applyMiddleware，你还用了其它 store enhancer，
// 一定要把 applyMiddleware 放到组合链的前面，因为 middleware 可能会包含异步操作。
// 比如，它应该在 redux-devtools 前面，
// 否则 DevTools 就看不到 Promise middleware 里 dispatch 的 action 了。
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { fetchPosts } from './actions'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
)

let rootEl = document.getElementById('root')

render(
    <Provider store = { store }>
		<App />
	</Provider>,
    rootEl
)

// store.dispatch(selectSubreddit('reactjs'))

// store.dispatch(fetchPosts('reactjs')).then(()=> {
// 	console.log(store.getState()) 

// 	store.dispatch(selectSubreddit('frontend'))

// 	store.dispatch(fetchPosts('frontend')).then(()=> {
// 		console.log(store.getState()) 
// 	})
// })
