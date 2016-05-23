import React, { Component, PropTypes } from 'react';

class Footer extends Component {
	renderFilter(filter, name) {
		if (filter === this.props.filter) {
			return name
		}

		return (
			<a href = "#" onClick = {
				e => {
					e.preventDefault()
					this.props.onFilterChange(filter)
				}
			}>{name}</a>
		)
	}

	render() {
		return (
			<p>
				Show:
				{' '}
				{this.renderFilter('SHOW_ALL', 'All')}
				{', '}
				{this.renderFilter('SHOW_COMPLETED', 'Completed')}
				{', '}
				{this.renderFilter('SHOW_ACTIVE', 'Active')}
				<br/>
				<button type="button" onClick={ this.props.onUndo } disabled={ this.props.undoDisabled }>
					undo
				</button>
				<button type="button" onClick={ this.props.onRedo } disabled={ this.props.redoDisabled }>
					redo
				</button>
			</p>
		)
	}
}

Footer.proptypes = {
	filter: React.PropTypes.oneOf([
		'SHOW_ALL',
		'SHOW_COMPLETED',
		'SHOW_ACTIVE'
	]).isRequired
}

export default Footer