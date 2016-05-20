import React, { Component, PropTypes } from 'react'
import Subreddit from './Subreddit'

class SubredditList extends Component {
	render() {
		return (
			<ul>
				{
					this.props.items.map((item, index) =>
						<Subreddit
							key = { index }
							title = { item.title }
							url = { item.url }
						/>
					)
				}
			</ul>
		)
	}
}

SubredditList.PropTypes = {
	items: React.PropTypes.arrayOf(React.PropTypes.shape({
		title: React.PropTypes.string.isRequired,
		url: React.PropTypes.string.isRequired
	}).isRequired).isRequired
}

export default SubredditList