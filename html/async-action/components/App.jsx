import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSubreddit, fetchPosts } from '../actions'
import Toolbar from './Toolbar'
import SubredditList from './SubredditList'

class App extends Component {
	render() {
		const { dispatch } = this.props
		return (
			<div>
				<Toolbar
					onSelectClick = {
						(subreddit) => {
							dispatch(selectSubreddit(subreddit))
						}
					}
				/>
				<SubredditList

				/>
			</div>
		)
	}
}

App.PropTypes = {

}

export default connect()(App)