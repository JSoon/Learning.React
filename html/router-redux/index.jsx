import React, {Component} from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import createLogger from 'redux-logger'
import {Router, hashHistory} from 'react-router'
import routes from './components/routes'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()

const store = createStore(
    rootReducer,
    applyMiddleware(
        loggerMiddleware
    )
)

render(
    <Provider store={store}>
        <Router routes={routes} history={hashHistory}>
        </Router>
    </Provider>,
    document.getElementById('root')
)