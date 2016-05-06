import React, { Component, PropTypes } from 'react'
import Todo from './Todo'

class TodoList extends Component {
	render() {
		return (
			<ul>
				{
					this.props.todos.map((todo, index) =>
						<Todo
							{...todo}
							key = {index}
							onClick = {
								() => this.props.onTodoClick(index)
							}
						/>
					)
				}
			</ul>
		)
	}
}

TodoList.proptypes = {
	todos: React.PropTypes.arrayOf(React.PropTypes.shape({
		text: React.PropTypes.string.isRequired,
		completed: React.PropTypes.bool.isRequired
	}).isRequired).isRequired,
	onTodoClick: React.PropTypes.func.isRequired
}

export default TodoList