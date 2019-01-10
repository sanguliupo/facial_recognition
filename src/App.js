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
      imageUrl: ''
    };
  }

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  onSubmit = () => {
    this.setState({
      imageUrl: this.state.input
    });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => {
        console.log(
          response.outputs[0].data.regions[0].region_info.bounding_box
        );
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          input={this.state.input}
          imageUrl={this.state.imageUrl}
          onSubmit={this.onSubmit}
          onInputChange={this.onInputChange}
        />
        <FaceRecognition imageUrl={this.state.imageUrl} />

        <Particles className="particles" params={particlesOptions} />
      </div>
    );
  }
}

export default App;
