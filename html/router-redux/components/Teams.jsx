import React, {Component} from 'react'
import {connect} from 'react-redux'
import Team from './Team'

class Teams extends Component {
    render() {
        const {teams} = this.props

        return (
            <ul>
                {
                    teams.map(
                        (item, index) => {
                            return <Team
                                key={index}
                                name={item.team}
                                />
                        }
                    )
                }
            </ul>
        )
    }
}

function mapStateToProps(state) {
    const {teams} = state
    return {
        teams
    }
}

export default connect(mapStateToProps)(Teams)