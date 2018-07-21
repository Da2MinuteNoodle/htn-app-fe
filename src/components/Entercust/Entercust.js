import React from 'react';

class Entercust extends React.Component {
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

  onCustNameChange = (event) => {
    this.setState({custName: event.target.value})
  }

  onCustPhoneChange = (event) => {
    this.setState({custPhone: event.target.value})
  }

  onDogNameChange = (event) => {
    this.setState({dogName: event.target.value})
  }

  onDogBreedChange = (event) => {
    this.setState({dogBreed: event.target.value})
  }

  onDogSizeChange = (event) => {
    this.setState({dogSize: event.target.value})
  }

  onDogAgeChange = (event) => {
    this.setState({dogAge: event.target.value})
  }

  onSpecialNeedsChange = (event) => {
    this.setState({specialNeeds: event.target.value})
  }

  onGroomedBeforeChange = (event) => {
    this.setState({groomedBefore: event.target.value})
  }

  onSubmitInfo = () => {
    fetch('https://arcane-beyond-44438.herokuapp.com/entercust', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.custName,
        phone: this.state.custPhone,
        dogname: this.state.dogName,
        dogbreed: this.state.dogBreed,
        dogsize: this.state.dogSize,
        dogage: this.state.dogAge,
        specialneeds: this.state.specialNeeds,
        groomedbefore: this.state.groomedBefore
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      })
  }

  render() {
    return(
      <div className="main-container">
        <div className="menu-container-info">
          <div className="enter-cust row" action="index.html" method="post">
            <div className="enterForm-cust col-sm-6">
              <div className="form-group">
                <label htmlFor="usr">Customer Name:</label>
                <input type="text" className="form-control" id="usr" onChange={this.onCustNameChange} />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Customer Phone:</label>
                <input type="tel" className="form-control" onChange={this.onCustPhoneChange} />
              </div>
            </div>
            <div className="formEnter-dog col-sm-6">
              <div className="enterForm-dog">
              <div className="form-group">
                <label htmlFor="phone">Dog Name:</label>
                <input type="text" className="form-control" onChange={this.onDogNameChange} />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Dog Breed:</label>
                <input type="text" className="form-control" onChange={this.onDogBreedChange} />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Dog Size:</label>
                <input type="text" className="form-control" onChange={this.onDogSizeChange} />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Dog Age:</label>
                <input type="text" className="form-control" onChange={this.onDogAgeChange} />
              </div>
              <div className="radio">
                Special Needs?<br />
                <label><input type="radio" name="optradio" onChange={this.onSpecialNeedsChange} />Yes</label>
                <label><input type="radio" name="optradio" onChange={this.onSpecialNeedsChange} />No</label>
              </div>
              <div className="radio">
                Grommed Before?<br />
                <label><input type="radio" name="optradio2" onChange={this.onGroomedBeforeChange} />Yes</label>
                <label><input type="radio" name="optradio2" onChange={this.onGroomedBeforeChange} />No</label>
              </div>
            </div>
            <button type="submit" className="btn btn-default" onClick={this.onSubmitInfo}>Save</button>
            <input type="reset" value="Reset" className="btn btn-default" />
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Entercust;
