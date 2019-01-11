import React, { Component } from 'react';

class Navigation extends Component {
	render() {
		return (
			<nav>
				<p
					onClick={() => this.props.onRouteChange('signin')}
					className="ma3 pa2 underline pointer"
					style={{ display: 'flex', justifyContent: 'flex-end' }}
				>
					Sign Out
				</p>
			</nav>
		);
	}
}

export default Navigation;
