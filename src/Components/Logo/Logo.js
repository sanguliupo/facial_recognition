import React, { Component } from 'react';
import Tilt from 'react-tilt';
import logo from './logo.png';
import './Logo.css';

class Logo extends Component {
	render() {
		return (
			<div>
				<Tilt
					className="Tilt br2 shadow-2 ma"
					options={{ max: 25 }}
					style={{ height: 100, width: 100 }}
				>
					<img alt="rainbow" src={logo} width="150" />
					<div className="Tilt-inner" />
				</Tilt>
			</div>
		);
	}
}

export default Logo;
