import React, {Component} from 'react'
import { Link, IndexLink } from 'react-router'

class App extends Component {
    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    {/*<li><IndexLink to="/" activeStyle={{ color: 'green' }}>Home</IndexLink></li>*/}
                    <li><Link to="/" activeStyle={{ color: 'green' }} onlyActiveOnIndex={true}>Home</Link></li>
                    <li><Link to="/about" activeStyle={{ color: 'green' }}>About</Link></li>
                    <li><Link to="/inbox" activeStyle={{ color: 'green' }}>Inbox</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

export default App