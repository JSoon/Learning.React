import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from './actions'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

class App extends Component {
	render() {
		// 通过调用 connect() 注入:
		// 解构赋值（http://es6.ruanyifeng.com/#docs/destructuring）
		const { dispatch, visibleTodos, VisibilityFilter } = this.props
		return (
			<div>
				<AddTodo
					onAddClick = {
						(text) => console.log('add todo:', text)
					}
				/>
				<TodoList
					todos = {[{
						text: 'Use Redux',
						completed: true
					},{
						text: 'Learn to connect it to React',
						completed: false
					}]}
					onTodoClick = {
						(index) =>
							console.log('todo clicked: todo', index)
					}
				/>
				<Footer
					filter = {'SHOW_ALL'}
					onFilterChange = {
						filter => {
							console.log('filter change:', filter)
						}
					}
				/>
			</div>
		)
	}	
}

export default App
