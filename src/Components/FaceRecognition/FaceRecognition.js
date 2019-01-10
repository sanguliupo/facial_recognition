import React, { Component } from 'react';
import './Facerecognition.css';

class FaceRecognition extends Component {
	render() {
		let top_value = Number(this.props.top_row) * 500;
		let right_value = Number(this.props.right_col) * 500;
		let bottom_value = Number(this.props.bottom_row) * 500;
		let left_value = Number(this.props.left_col) * 500;
		return (
			<div className="shadow br2 tc ma3">
				<img
					src={this.props.imageUrl}
					alt=""
					width="500px"
					height="auto"
				/>
				<p>{top_value}</p>
				<p>{right_value}</p>
				<p>{bottom_value}</p>
				<p>{left_value}</p>
				<div
					className="bounding-box"
					style={{
						top: top_value,
						right: right_value,
						bottom: 350,
						left: 121
					}}
				/>
			</div>
		);
	}
}

export default FaceRecognition;
