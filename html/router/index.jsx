import React, {Component} from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, hashHistory } from 'react-router'

class About extends Component {
    render() {
        return (
            <h2>About Page.</h2>
        )
    }
}

class Message extends Component {
    constructor(props) {
        super(props)
        console.log('constructor')
        let id = props.params.id
        this.state = {
            message: id
        }
    }

    componentWillMount() {
        console.log('componentWillMount')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps')
        if (nextProps.params.id !== this.props.params.id) {
            this.state = {
                message: nextProps.params.id
            }
        }
    }

    render() {
        console.log('render')
        return (
            <h3>Message {this.state.message}</h3>
        )
    }
}

class Inbox extends Component {
    render() {
        let path = '/' + this.props.route.path
        return (
            <div>
                <h2>Inbox Page.</h2>
                {this.props.children || <h3>Welcome to ur Inbox</h3>}
                <ul>
                    <li><Link to={path + '/message/1'}>111111</Link></li>
                    <li><Link to={path + '/message/2'}>222222</Link></li>
                    <li><Link to={path + '/message/3'}>333333</Link></li>
                </ul>
            </div>
        )
    }
}
class Home extends Component {
    render() {
        return (
            <h2>Home Page.</h2>
        )
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

render(
    (
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <Route path="about" component={About} />
                <Route path="inbox" component={Inbox}>
                    <Route path="message/:id" component={Message} />
                </Route>
            </Route>
        </Router>
    ),
    document.getElementById('root')
)