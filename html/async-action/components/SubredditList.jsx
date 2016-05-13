import React, { Component, PropTypes } from 'react'
import Subreddit from './Subreddit'

class SubredditList extends Component {
	render() {
		return (
			<ul>
				<Subreddit
					title = '呵呵哒'
				/>
			</ul>
		)
	}
}

SubredditList.PropTypes = {

}

export default SubredditList