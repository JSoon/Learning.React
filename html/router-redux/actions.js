const ADD_TEAM = 'ADD_TEAM'

const addTeam = (team) => {
    return {
        type: ADD_TEAM,
        team: team
    }
}

export {
ADD_TEAM,

addTeam
}