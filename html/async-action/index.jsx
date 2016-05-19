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

const asyncInitState = ({
	dispatch,
	getState
}) => (next) => (action) => {
	console.log(next)
	console.log(action)
	console.log(getState())
	next(dispatch(fetchPosts('frontend')))
}

const store = createStore(
	rootReducer,
	{
		postsBySubreddit: {
			// items: [{
			// 	title: 'heheda'
			// }, {
			// 	title: 'momoda'
			// }]
		}
	},
	applyMiddleware(
		asyncInitState,
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
