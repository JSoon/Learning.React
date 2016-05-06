import React, { Component, PropTypes } from 'react'

class Todo extends Component {
	render() {
		return(
			<li onClick={ this.props.onClick }
				style={{
					textDecoration: this.props.completed ? 'line-through': 'none',
					cursor: this.props.completed ? 'default': 'pointer'
				}}>
				{ this.props.text }
			</li>
		)
	}
}

Todo.proptypes = {
	onClick: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired
}

export default Todo