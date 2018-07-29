import React from 'react';

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }
  render() {
    const { onRouteChange } = this.props;
    return(
      <div className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center applecolor">

      </div>
    );
  }
}

export default Schedule;
