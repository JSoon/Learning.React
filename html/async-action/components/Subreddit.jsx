import React, { Component, PropTypes } from 'react'

class Subreddit extends Component {
	render() {
		return (
			<li>
				<a href = { this.props.url } target = "_blank">
				{ this.props.title }
				</a>
			</li>
		)
	}
}

Subreddit.PropTypes = {
	title: React.PropTypes.string.isRequired,
	url: React.PropTypes.string.isRequired
}

export default Subreddit