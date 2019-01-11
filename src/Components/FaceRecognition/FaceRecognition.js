import React, { Component } from 'react';
import './Facerecognition.css';

class FaceRecognition extends Component {
	render() {
		return (
			<div className="center ma">
				<div className="mt2 absolute">
					<img
						id="inputimage"
						src={this.props.imageUrl}
						alt=""
						height="500px"
						width="auto"
					/>

					<div
						className="bounding-box"
						style={{
							top: this.props.top_row,
							right: this.props.right_col,
							bottom: this.props.bottom_row,
							left: this.props.left_col
						}}
					/>
				</div>
			</div>
		);
	}
}
export default FaceRecognition;
