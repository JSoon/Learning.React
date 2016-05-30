import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './App'
import AddTeam from './AddTeam'
import Teams from './Teams'

const routes = (
    <Route path="/" component={App}>
        <Route path="/add" component={AddTeam} />
        <Route path="/teams" component={Teams} />
    </Route>
)

export default routes