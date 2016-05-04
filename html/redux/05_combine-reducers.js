import { createStore, combineReducers } from 'redux'

const SET_NAME = 'SET_NAME'
const ADD_ITEM = 'ADD_ITEM'

var userReducer = (state = {}, action) => {
    console.log('userReducer was called with state', state, 'and action', action)
    switch (action.type) {
        case SET_NAME:
            return {
                ...state,
                name: action.name
            }
        default:
            return state
    }
}
var itemReducer = (state = [], action) => {
    console.log('itemReducer was called with state', state, 'and action', action)
    switch (action.type) {
        case ADD_ITEM:
            return [
                ...state,
                action.item
            ]
        default:
            return state
    }
}

var reducer = combineReducers({
    user: userReducer,
    item: itemReducer
})

var store = createStore(reducer)

console.log('\n', '### It starts here:')
console.log('store state after initialization: ', store.getState())

var setNameActionCreator = (name) => {
    return {
        type: SET_NAME,
        name: name
    }
}

store.dispatch(setNameActionCreator('JSoon'))

console.log('store state after action SET_NAME: ', store.getState())
