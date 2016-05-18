import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSubreddit, fetchPosts } from '../actions'
import Toolbar from './Toolbar'
import SubredditList from './SubredditList'

class App extends Component {
	render() {
		const { dispatch, list } = this.props
		return (
			<div>
				<Toolbar
					onSelectClick = {
						(subreddit) => {
							dispatch(selectSubreddit(subreddit))
							dispatch(fetchPosts(subreddit))
						}
					}
				/>
				<SubredditList
					items = { this.props.list }
					/*items = {
						[{
							title: 'heheda'
						}, {
							title: 'momoda'
						}]
					}*/
				/>
			</div>
		)
	}
}

App.PropTypes = {
	list: React.PropTypes.arrayOf(React.PropTypes.shape({
		title: React.PropTypes.string.isRequired
	}))
}

function mapStateToProps(state) {
	return {
		list: state.postsBySubreddit.items || []
	}
}

export default connect(mapStateToProps)(App)