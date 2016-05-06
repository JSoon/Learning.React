import { createStore } from 'redux'
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from './actions'
import todoApp from './reducers'

let store = createStore(todoApp)

// log initialized state
console.log(store.getState())

// 监听 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
let unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

// 发起一系列 action
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(completeTodo(0))
store.dispatch(completeTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))