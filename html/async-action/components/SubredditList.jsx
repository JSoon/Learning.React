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
							handleClick = {
								() => {
									this.props.handleClick(index)
								}
							}
							// actions = { this.props.actions }
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
	}).isRequired).isRequired,
	handleClick: PropTypes.func.isRequired
}

export default SubredditList