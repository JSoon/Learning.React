import React, { Component, PropTypes } from 'react'

class Subreddit extends Component {
	render() {
		return (
			<li>
				{ this.props.title }
			</li>
		)
	}
}

Subreddit.PropTypes = {
	title: React.PropTypes.string.isRequired
}

export default Subreddit