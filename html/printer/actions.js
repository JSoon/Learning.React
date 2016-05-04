/**
 * action types
 */
export const ADD_TODO = 'ADD_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/**
 * action creators
 */
export var addTodo = (text) => {
    return {
        type: ADD_TODO,
        text: text
    }
}

export var completeTodo = (index) => {
    return {
        type: COMPLETE_TODO,
        index: index
    }
}

export var setVisibilityFilter = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        filter: filter
    }
}
