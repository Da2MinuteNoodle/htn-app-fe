import React from 'react';

class Viewcust extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      custName: '',
      custPhone: '',
      dogName: '',
      dogBreed: '',
      dogSize: '',
      dogAge: '',
      specialNeeds: '',
      groomedBefore: ''
    }
  }
  render() {
    return(
      <div className="main-container">
        <div className="menu-container-info">
          <div className="enter-cust row" action="index.html" method="post">

        </div>
      </div>
    </div>
    );
  }
}

export default Viewcust;
