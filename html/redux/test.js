import { createStore } from 'redux'

// action
function increment() {
    return {
        type: 'INCREMENT'
    }
}

function decrement() {
    return {
        type: 'DECREMENT'
    }
}

// reducer
function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

// store machine
let store = createStore(counter)

// subscribe
store.subscribe(() =>
    console.log(store.getState())
)

// dispatch
store.dispatch(increment())

store.dispatch(decrement())

store.dispatch(increment())
