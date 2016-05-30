import React, {Component} from 'react'
import { browserHistory } from 'react-router'

class About extends Component {
    handleSubmit(e) {
        e.preventDefault()
        const userName = e.target.elements[0].value
        const repo = e.target.elements[1].value
        const path = `/about/${userName}/${repo}`
        console.log(path)
        browserHistory.push(path)
        // const aboutForm = this.refs.aboutForm
        // aboutForm.remove()
    }

    render() {
        return (
            <div>
                <h2>About Page.</h2>
                <ul>
                    <li>
                        {this.props.children ||
                            <form onSubmit={this.handleSubmit.bind(this) } ref="aboutForm">
                                <input type="text" placeholder="userName"/> / {' '}
                                <input type="text" placeholder="repo"/>{' '}
                                <button type="submit">Go</button>
                            </form>}
                    </li>
                </ul>
            </div>
        )
    }
}

export default About