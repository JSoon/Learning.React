import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {addTeam} from '../actions'

class AddTeam extends Component {
    handleAddTeam(e) {
        e.preventDefault()
        const {dispatch} = this.props
        const input = this.refs.name
        const name = input.value
        if (name) {
            dispatch(addTeam(name))
            input.value = ''
        } else {
            alert('Please input a team to add!')
        }
    }

    render() {
        return (
            <form onSubmit={this.handleAddTeam.bind(this) }>
                <input type="text" placeholder="Type team name here" ref="name" />
                <button type="button" onClick={this.handleAddTeam.bind(this) }>Add</button>
            </form>
        )
    }
}

export default connect()(AddTeam)