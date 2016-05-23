import { combineReducers } from 'redux'
import undoable, { distinctState } from 'redux-undo'
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions'

// const { SHOW_ALL } = VisibilityFilters
// equal to below
const SHOW_ALL = VisibilityFilters.SHOW_ALL

var visibilityFilter = (state = SHOW_ALL, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

var todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            if (action.text) {
                return [...state, {
                    text: action.text,
                    completed: false
                }]
            }
            return state
        case COMPLETE_TODO:
            let isCompleted = state[action.index].completed,
                toggleCompleted = !isCompleted
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    completed: toggleCompleted
                }),
                ...state.slice(action.index + 1)
            ]
        default:
            return state;
    }
}

// return redux state
// {
//    visibilityFilter: visibilityFilter,
//     todos: todos 
// }
const todoApp = combineReducers({
    visibilityFilter: visibilityFilter,
    todos: undoable(todos, {
        filter: distinctState()
    })
})

export default todoApp
