import React from 'react';

class Menu extends React.Component {
  render() {
    return(
        <div className="main-container">
          <div className="menu-container">
            <div className="menu-logo">
              <img src="logo2.png" alt="LOGO" /><br />
            </div>
            <div className="menu-buttons">
              <a href="enter-cust.html"><button type="button" className="btn btn-default" href="enter-cust.html">Enter Customer Info</button></a>
              <button type="button" className="btn btn-default" href="calendar.html">Calendar/Timetable</button>
              <button type="button" className="btn btn-default" href="view-cust.html">View Customers</button>
            </div>
          </div>
        </div>
    );
  }
}

export default Menu;
