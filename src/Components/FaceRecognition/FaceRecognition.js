import React, { Component } from 'react';

class FaceRecognition extends Component {
	render() {
		return (
			<div className="shadow br2 tc ma3">
				<img
					src={this.props.imageUrl}
					alt=""
					width="500px"
					height="auto"
				/>
			</div>
		);
	}
}

export default FaceRecognition;
