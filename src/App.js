import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';
import Logo from './Components/Logo/Logo';
import Rank from './Components/Rank/Rank';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
// import Particles from 'react-particles-js';
import './App.css';



// const particlesOptions = {
//   particles: {
//     number: {
//       value: 400,
//       density: {
//         enable: true,
//         value_area: 3000
//       }
//     },
//     size: {
//       value: 3
//     }
//   },
//   interactivity: {
//     events: {
//       onhover: {
//         enable: true,
//         mode: 'repulse'
//       }
//     }
//   }
// };

const initialState={
  input: '',
  imageUrl: '',
  top_row: '',
  left_col: '',
  bottom_row: '',
  right_col: '',
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    };
  

  loadUser = data => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    });
  };

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  onSubmit = () => {
    this.setState({ imageUrl: this.state.input });
     fetch('https://salty-ridge-15154.herokuapp.com/imageurl', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              input: this.state.input
            })
          })
      .then(response=>response.json())
      .then(response => {
        if (response) {
          fetch('https://salty-ridge-15154.herokuapp.com/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count }));
            });
        }
        this.displayFaceBox(response);
      })
      .catch(err => console.log(err));
  };

  displayFaceBox = response => {
    const clarifaiFace =
      response.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    this.setState({
      left_col: clarifaiFace.left_col * width,
      top_row: clarifaiFace.top_row * height,
      right_col: width - clarifaiFace.right_col * width,
      bottom_row: height - clarifaiFace.bottom_row * height
    });
  };

  onRouteChange = route => {
    if (route === 'home') {
      this.setState({ isSignedIn: true });
    } else if (route === 'signout') {
      this.setState(initialState);
    }
    this.setState({ route: route });
  };

  render() {
    return (
      <div className="App">
        <Navigation
          onRouteChange={this.onRouteChange}
          isSignedIn={this.state.isSignedIn}
        />
        {this.state.route === 'home' ? (
          <div>
            <Logo />
            <Rank
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
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
             
          </div>
        ) : this.state.route === 'signin' ? (
          <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
        ) : (
          <Register
            onRouteChange={this.onRouteChange}
            loadUser={this.loadUser}
          />
        )}
      </div>
    );
  }
}

export default App;
