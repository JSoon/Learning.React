import React, { Component, PropTypes } from 'react'

class Toolbar extends Component {
	render() {
		return (
			<div>
				<button type='button' data-url='frontend' onClick = {
					e => this.handleClick(e)
				}>
					frontend
				</button>
				<button type='button' data-url='reactjs' onClick = {
					e => this.handleClick(e)
				}>
					reactjs
				</button>
			</div>
		)
	}

	handleClick(e) {
		let subreddit = e.currentTarget.getAttribute('data-url')
		this.props.onSelectClick(subreddit)
	}
}

Toolbar.PropTypes = {
	onSelectClick: React.PropTypes.func.isRequired
}

export default Toolbar