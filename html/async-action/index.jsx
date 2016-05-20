import React from 'react' 
import { render } from 'react-dom'
import App from './components/App'

import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
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
