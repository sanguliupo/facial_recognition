import React, { Component } from 'react';

class Rank extends Component {
	render() {
		return (
			<div className="tc courier f2">
				<p>{this.props.name}, Your current entry count is</p>
				<p>{this.props.entries}</p>
			</div>
		);
	}
}

export default Rank;
