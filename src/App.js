// importing all the modules into the main app

import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Menu from './components/Menu/Menu';
import Entercust from './components/Entercust/Entercust';
import Viewcust from './components/Viewcust/Viewcust';
import Alert from 'react-s-alert';
import './App.css';

// Setting state

const initialState = {
  input: '',
  box: {},
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

// Starting the main app component

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
    }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      joined: data.joined
    }})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  // Setting route change function.

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    } else if (route === 'entercust') {
      this.setState({isSignedIn: true})
    } else if (route === 'viewcust') {
      this.setState({isSignedIn: true})
    } else if (route === 'calendar') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  // Rendering the main app from the imported components
  //
  // Which includes the Alerts at the bottom, it uses multiple if statements to check which module to render first.
  // The default is signin because of the default route being equal to nothing.

  render() {
    const { isSignedIn, route } = this.state;
    return (
      <div className="App">
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} className="navigation-01/" />
        { route === 'home' ?
              <Menu isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
              : ( route === 'entercust' ?
              <Entercust isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
              : (route === 'viewcust' ?
              <Viewcust isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
              // : (route === 'calendar') ?
              // <Booking isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
              : <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} alertBox={this.Alert} />
            )
            )
        }
        <Alert stack={{limit: 3}} />
      </div>
    );
  }
}

export default App;
