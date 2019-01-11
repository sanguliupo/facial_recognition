import React, { Component } from 'react';

class Navigation extends Component {
	render() {
		if (this.props.isSignedIn) {
			return (
				<nav>
					<p
						onClick={() => this.props.onRouteChange('signout')}
						className="ma3 pa2 underline pointer"
						style={{ display: 'flex', justifyContent: 'flex-end' }}
					>
						Sign Out
					</p>
				</nav>
			);
		} else {
			return (
				<nav>
					<p
						onClick={() => this.props.onRouteChange('signin')}
						className="ma3 pa2 underline pointer"
						style={{ display: 'flex', justifyContent: 'flex-end' }}
					>
						Sign In
					</p>
					<p
						onClick={() => this.props.onRouteChange('register')}
						className="ma3 pa2 underline pointer"
						style={{ display: 'flex', justifyContent: 'flex-end' }}
					>
						Register
					</p>
				</nav>
			);
		}
	}
}

export default Navigation;
