import React, {Component} from 'react'

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

export default Message