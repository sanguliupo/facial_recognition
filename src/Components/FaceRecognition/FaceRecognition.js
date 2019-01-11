import React, { Component } from 'react';
import './Facerecognition.css';

class FaceRecognition extends Component {
	render() {
		console.log(this.props.top_row);
		if (Number(this.props.top_row) > 0) {
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
								top: Number(this.props.top_row),
								right: Number(this.props.right_col),
								bottom: Number(this.props.bottom_row),
								left: Number(this.props.left_col)
							}}
						/>
					</div>
				</div>
			);
		} else return null;
	}
}
export default FaceRecognition;
