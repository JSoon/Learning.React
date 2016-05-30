import React, {Component} from 'react'
import {Link} from 'react-router'

class App extends Component {
    render() {
        return (
            <div>
                <h1>NBA LEAGUE</h1>
                <ul>
                    <li><Link to="/add">add team</Link></li>
                    <li><Link to="/teams">teams</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

export default App