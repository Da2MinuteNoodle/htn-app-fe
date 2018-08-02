import React from 'react';
import logo from '../logo2.png';
import Alert from 'react-s-alert';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

handleClick1() {
      Alert.warning('<h1>Success</h1>', {
          position: 'bottom-right',
          effect: 'jelly',
          offset: 100
      });
  }
  handleClick2() {
      Alert.info('Loading', {
          position: 'top-right',
          effect: 'jelly',
          timeout: 2000
      });
  }
  handleClick3() {
      Alert.error('Wrong credentials', {
          position: 'top',
          effect: 'jelly'
      });
  }

  handleClick4() {
      Alert.error('Unable to get user', {
          position: 'top',
          effect: 'jelly'
      });
  }

  handleCloseAll() {
      Alert.closeAll();
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    this.handleClick2()
    fetch('https://arcane-beyond-44438.herokuapp.com/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        } else {
          this.handleClick3();
        }
      })
  }

  render() {
    const { onRouteChange } = this.props;
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center applecolor">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <img src={logo} alt='logo' />
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                className="pa2 input-reset ba bw1 b--black-05 bg-transparent hover-black w-100"
                type="email"
                name="email-address"
                id="email-address"
                onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                className="b pa2 input-reset ba bw1 b--black-05 bg-transparent hover-black w-100"
                type="password"
                name="password"
                id="password"
                onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
              onClick={this.onSubmitSignIn}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign in" />
            </div>
            <div className="lh-copy mt3">
              <p onClick={() => onRouteChange('register')} className="f6 link dim black db pointer">Register</p>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Signin;
