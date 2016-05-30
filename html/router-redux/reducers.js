import {combineReducers} from 'redux'
import {
    ADD_TEAM,
    addTeam
} from './actions'

const teams = (state = [], action) => {
    switch (action.type) {
        case ADD_TEAM:
            return [
                ...state,
                {
                    team: action.team
                }
            ]
        default:
            return state
    }
}

const rootReducer = combineReducers({
    teams
})

export default rootReducer