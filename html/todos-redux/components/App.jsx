import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../actions'
import { ActionCreators } from 'redux-undo'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

class App extends Component {
	render() {
		// 任何一个从 connect() 包装好的组件都可以得到一个 dispatch 方法作为组件的 props，
		// 以及得到全局 state 中所需的任何内容
		// 
		// 从组件的 props 属性中导入 visibleTodos, visibilityFilter
		// 解构赋值（http://es6.ruanyifeng.com/#docs/destructuring）
		const {
			dispatch, 
			visibleTodos, 
			visibilityFilter,
			undoDisabled,
			redoDisabled
		} = this.props
		// equal to below
		// const visibilityFilter = this.props.visibilityFilter

		return (
			<div>
				<AddTodo
					onAddClick = {
						text => dispatch(addTodo(text))
						// (text) => console.log('add todo:', text)
					}
				/>
				<TodoList
					todos = { this.props.visibleTodos }
					onTodoClick = {
						index => {
							dispatch(completeTodo(index))
						}
					}
					/* todos = {[{
						text: 'Use Redux',
						completed: true
					},{
						text: 'Learn to connect it to React',
						completed: false
					}]}
					onTodoClick = {
						index =>
							console.log('todo clicked: todo', index)
					} */
				/>
				<Footer
					filter = { this.props.visibilityFilter }
					onFilterChange = {
						filter => {
							// console.log('filter change:', filter)
							// 派发 action（这里是 setVisibilityFilter）到 reducer中处理
							// setVisibilityFilter 通过其 type 被 reducer 识别，并做出
							// 响应处理，最后返回一个新的 state（这里是 action.filter）
							// 最终结果：
							// reducer 改变了 state.visibilityFilter ，而 state.visibilityFilter
							// 被映射给了 visibilityFilter ，最后由于 visibilityFilter 的改变，
							// 就更新了 Footer 组件的视图
							// 流程：
							// dispatch action -> reducer -> state -> update view/component
							dispatch(setVisibilityFilter(filter))
						}
					}
					onUndo = { () => dispatch(ActionCreators.undo()) }
					onRedo = { () => dispatch(ActionCreators.redo()) }
					undoDisabled = { this.props.undoDisabled }
					redoDisabled = { this.props.redoDisabled }
				/>
			</div>
		)
	}	
}

App.propTypes = {
	visibleTodos: React.PropTypes.arrayOf(React.PropTypes.shape({
		text: React.PropTypes.string.isRequired,
		completed: React.PropTypes.bool.isRequired
	})),
	// 这里通过容器组件 App 的 props.visibilityFilter 传递给了展示组件 Footer 的 props.filter
	// 且他们必须结构类型一致
	// App 的 props 映射自 Redux 中的 state
	visibilityFilter: React.PropTypes.oneOf([
		'SHOW_ALL',
		'SHOW_COMPLETED',
		'SHOW_ACTIVE'
	]).isRequired
}

function selectTodos(todos, filter) {
	switch(filter) {
		case VisibilityFilters.SHOW_ALL:
			return todos
		case VisibilityFilters.SHOW_COMPLETED:
			return todos.filter(todo => todo.completed)
		case VisibilityFilters.SHOW_ACTIVE:
			return todos.filter(todo => !todo.completed)
	}
}

// 映射 Redux.state 中的属性到 App.props
function mapStateToProps(state) {
	const todos = state.todos,
		filter = state.visibilityFilter
	return {
		visibleTodos: selectTodos(todos.present, filter),
		visibilityFilter: filter,
		undoDisabled: todos.past.length === 0,
		redoDisabled: todos.future.length === 0
	}
}

// 从 Redux store 接收到全局的 state，然后返回组件中需要的 props
// 包装 component ，注入 dispatch 和 state 到其默认的 connect(mapStateToProps)(App) 中
export default connect(mapStateToProps)(App)
