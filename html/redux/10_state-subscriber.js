import { createStore, combineReducers } from 'redux'

const ADD_ITEM = 'ADD_ITEM'

var addItemActionCreator = (item) => {
    return {
        type: ADD_ITEM,
        item: item
    }
}

var itemsReducer = (state = [], action) => {
    console.log('itemsReducer was called with state', state, 'and action', action)

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
    items: itemsReducer
})

var store = createStore(reducer)

store.subscribe(() => {
    console.log('store has been updated. Latest store state:', store.getState())
    // 在这里更新你的视图
})

store.dispatch(addItemActionCreator({
    id: 1234,
    description: 'anything'
}))
