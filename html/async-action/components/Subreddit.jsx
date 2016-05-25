import React, { Component, PropTypes } from 'react'
// import { connect } from 'react-redux'
// import { selectSubreddit, fetchPosts } from '../actions'

class Subreddit extends Component {
	componentDidMount() {
		// console.log(this.props)
	}

	handleClick(e) {
		// const { dispatch } = this.props
		// dispatch(selectSubreddit('heheda'))
		// dispatch(fetchPosts('heheda'))

		// const { selectSubreddit, fetchPosts } = this.props
		// selectSubreddit('heheda')
		// fetchPosts('heheda')
		
		// const { actions } = this.props
		// actions.selectSubreddit('heheda')
		// actions.fetchPosts('heheda')
	}

	render() {
		return (
			<li>
				<a
					href = { this.props.url }
					target = "_blank"
					onClick = { this.props.handleClick }
					>
					{ this.props.title }
				</a>
			</li>
		)
	}
}

Subreddit.PropTypes = {
	title: React.PropTypes.string.isRequired,
	url: React.PropTypes.string.isRequired,
	handleClick: PropTypes.func.isRequired
}

// function getAppState(state) {
// 	console.log(state)
// 	return state
// }

// export default connect(getAppState)(Subreddit)
export default Subreddit