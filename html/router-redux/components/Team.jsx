import React, {Component} from 'react'

class Team extends Component {
    render() {
        return (
            <li>{this.props.name}</li>
        )
    }
}

export default Team