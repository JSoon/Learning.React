import React, {Component} from 'react'
import { Link } from 'react-router'

class Inbox extends Component {
    render() {
        // let path = '/' + this.props.route.path
        return (
            <div>
                <h2>Inbox Page.</h2>
                {this.props.children || <h3>Welcome to ur Inbox</h3>}
                <ul>
                    <li><Link to={'/message/1'} activeStyle={{ color: 'green' }}>111111</Link></li>
                    <li><Link to={'/message/2'} activeStyle={{ color: 'green' }}>222222</Link></li>
                    <li><Link to={'/message/3'} activeStyle={{ color: 'green' }}>333333</Link></li>
                </ul>
            </div>
        )
    }
}

export default Inbox