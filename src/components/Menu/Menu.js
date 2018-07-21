import React from 'react';
import logo from '../logo2.png';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }
  render() {
    const { onRouteChange, isSignedIn } = this.props;
    return(
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center applecolor">
          <div className="main-container">
            <div className="menu-container">
              <div className="menu-logo">
                <img src={logo} alt="LOGO" /><br />
              </div>
              <div className="menu-buttons">
                <button type="button" onClick={() => onRouteChange('entercust')} className="btn btn-default">Enter Customer Info</button>
                <button type="button" className="btn btn-default" href="calendar.html">Calendar/Timetable</button>
                <button type="button" className="btn btn-default" href="view-cust.html">View Customers</button>
              </div>
            </div>
          </div>
        </article>
    );
  }
}

export default Menu;
