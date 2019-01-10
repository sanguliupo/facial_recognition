import React, { Component } from 'react';

class Navigation extends Component {
	render() {
		return (
			<nav>
				<p
					className="ma3 pa2 underline"
					style={{ display: 'flex', justifyContent: 'flex-end' }}
				>
					Sign In
				</p>
			</nav>
		);
	}
}

export default Navigation;
