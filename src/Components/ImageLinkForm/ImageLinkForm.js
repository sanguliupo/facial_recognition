import React, { Component } from 'react';
import './ImageLinkForm.css';

class ImageLinkForm extends Component {
	render() {
		return (
			<div className="tc">
				<p className="courier f4">
					This app will detect faces in your picture. Give it a try.
				</p>
				<div className="imageLinkForm center shadow-5 ba">
					<input
						className="mt3 ma3"
						type="text"
						placeholder="input picture link"
						size="50"
						onChange={this.props.onInputChange}
					/>
					<button
						className="ma3 ba"
						type="submit"
						onClick={this.props.onSubmit}
					>
						Detect
					</button>
				</div>
			</div>
		);
	}
}

export default ImageLinkForm;
