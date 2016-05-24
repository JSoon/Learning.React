import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectSubreddit, fetchPosts } from '../actions'
import Toolbar from './Toolbar'
import SubredditList from './SubredditList'

class App extends Component {
	constructor(props) {
		super(props)
		// console.log(props)
		console.log('constructor')
	}

	componentWillMount() {
	 	// console.log('componentWillMount')   
	    const { dispatch, selectedSubreddit } = this.props
	    console.log(selectedSubreddit)
	    dispatch(fetchPosts(selectedSubreddit))
	}

	componentDidMount() {
	 	// console.log('componentDidMount')
	}

	render() {
	 	console.log('render')
		const { dispatch, selectedSubreddit, items, isFetching } = this.props

		let boundActionCreators = bindActionCreators({
			selectSubreddit,
			fetchPosts
		}, dispatch)

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
				{ isFetching && items.length === 0 &&
			    	<h2>Loading...</h2>
			    }
				{ !isFetching && items.length === 0 &&
			    	<h2>Empty</h2>
			    }
				<SubredditList
					items = { items }
					{ ...boundActionCreators }
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
	selectedSubreddit: React.PropTypes.string.isRequired,
	isFetching: React.PropTypes.bool.isRequired,
	lastUpdated: React.PropTypes.number,
	items: React.PropTypes.arrayOf(React.PropTypes.shape({
		title: React.PropTypes.string.isRequired,
		url: React.PropTypes.string.isRequired
	}))
}

function mapStateToProps(state) {
	console.log('mapStateToProps')
	let { selectedSubreddit, postsBySubreddit } = state
	let {
		isFetching,
		lastUpdated,
		items
	} = postsBySubreddit[selectedSubreddit] || {
		isFetching: true,
		items: []
	}
	return {
		selectedSubreddit,
		isFetching,
		lastUpdated,
		items
	}
}

// connect 高阶组件，用于监听 Redux store，同时也会将 dispatch 注入到组件的 props 中去
// 非常地方便
export default connect(mapStateToProps)(App)