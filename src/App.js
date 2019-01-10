import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import Rank from './Components/Rank/Rank';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import './App.css';

const app = new Clarifai.App({ apiKey: '5df2a1cd6ab145b3ae5c8965a0878107' });

const particlesOptions = {
  particles: {
    number: {
      value: 400,
      density: {
        enable: true,
        value_area: 3000
      }
    },
    size: {
      value: 3
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'repulse'
      }
    }
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      imageUrl: '',
      top_row: '',
      left_col: '',
      bottom_row: '',
      right_col: ''
    };
  }

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  onSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.displayFaceBox(response))
      .catch(err => console.log(err));
  };

  displayFaceBox = response => {
    this.setState({
      top_row:
        response.outputs[0].data.regions[0].region_info.bounding_box.top_row,
      left_col:
        response.outputs[0].data.regions[0].region_info.bounding_box.left_col,
      bottom_row:
        response.outputs[0].data.regions[0].region_info.bounding_box.bottom_row,
      right_col:
        response.outputs[0].data.regions[0].region_info.bounding_box.right_col
    });
  };

  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onSubmit={this.onSubmit}
          onInputChange={this.onInputChange}
        />
        <FaceRecognition
          imageUrl={this.state.imageUrl}
          top_row={this.state.top_row}
          left_col={this.state.left_col}
          bottom_row={this.state.bottom_row}
          right_col={this.state.right_col}
        />

        <Particles className="particles" params={particlesOptions} />
      </div>
    );
  }
}

export default App;
