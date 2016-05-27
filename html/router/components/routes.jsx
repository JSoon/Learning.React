import React from 'react'
import {
    Route,
    IndexRoute,
    Redirect
} from 'react-router'
import App from './App'
import Dashboard from './Dashboard'
import Home from './Home'
import About from './About'
import Inbox from './Inbox'
import Message from './Message'

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Dashboard} />
        <Route path="about" component={About} />
        <Route path="inbox" component={Inbox}>
            <Route path="/message/:id" component={Message} />
            <Redirect from="message/:id" to="/message/:id" />
        </Route>
    </Route>
)

export default routes