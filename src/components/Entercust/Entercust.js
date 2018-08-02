import React from 'react';
import Alert from 'react-s-alert';

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

  handleClick1() {
        Alert.info('Customer Entered', {
            position: 'top',
            effect: 'jelly',
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
        Alert.error('Error Entering Customer', {
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

    onExisting = () => {
      this.setState({custName: document.getElementById('edit-form-name').value});
      this.setState({custPhone: document.getElementById('edit-form-phone').value});
      this.setState({dogName: document.getElementById('edit-form-dogname').value});
      this.setState({dogBreed: document.getElementById('edit-form-dogbreed').value});
      this.setState({dogSize: document.getElementById('edit-form-dogsize').value});
      this.setState({dogAge: document.getElementById('edit-form-dogage').value});
      this.setState({specialNeeds: document.getElementById('edit-form-specialneeds').value});
      this.setState({groomedBefore: document.getElementById('edit-form-groomedbefore').value});
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
    this.handleClick2()
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
        groomedbefore: this.state.groomedBefore,
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response === 'Incorrect form submission') {
          this.handleClick3()
        } else if (response === 'unable to enter customer') {
          this.handleClick3()
        } else {
          this.handleClick1()
          this.props.onRouteChange('home')
        }
      })
  }

  boolCheck = () => {
    if (this.state.specialNeeds === "on") {
      this.state.specialNeeds = true
    } else {
      this.state.specialNeeds = false
    }
    if (this.state.groomedBefore === 'on') {
      this.state.groomedBefore = true
    } else {
      this.state.groomedBefore = false
    }
  }

  onSubmitCustomer = () => {
    this.onExisting()
    this.boolCheck()
    this.onSubmitInfo()
  }

  onTest = () => {
    this.onExisting()
    this.boolCheck()
    console.log(this.state)
  }

  render() {
    return(
      <div className="main-container">
        <div className="menu-container-info">
          <div className="enter-cust row" action="index.html" method="post">
            <div className="enterForm-cust col-sm-6">
              <div className="form-group">
                <label htmlFor="usr">Customer Name:</label>
                <input type="text" className="form-control" id="edit-form-name" onChange={this.onCustNameChange} />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Customer Phone:</label>
                <input type="tel" className="form-control" id="edit-form-phone" onChange={this.onCustPhoneChange} />
              </div>
            </div>
            <div className="formEnter-dog col-sm-6">
              <div className="enterForm-dog">
              <div className="form-group">
                <label htmlFor="phone">Dog Name:</label>
                <input type="text" className="form-control" id="edit-form-dogname" onChange={this.onDogNameChange} />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Dog Breed:</label>
                <input type="text" className="form-control" id='edit-form-dogbreed' onChange={this.onDogBreedChange} />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Dog Size:</label>
                <input type="text" className="form-control" id='edit-form-dogsize' onChange={this.onDogSizeChange} />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Dog Age:</label>
                <input type="text" className="form-control" id='edit-form-dogage' onChange={this.onDogAgeChange} />
              </div>
              <div className="checkbox">
                Special Needs?<br />
                <label><input type="checkbox" name="checkbox" id='edit-form-specialneeds' onChange={this.onSpecialNeedsChange} />Yes </label>
              </div>
              <div className="checkbox">
                Grommed Before?<br />
                <label><input type="checkbox" name="checkbox2" id='edit-form-groomedbefore' onChange={this.onGroomedBeforeChange} />Yes </label>
              </div>
            </div>
            <button type="submit" className="btn btn-default" onClick={this.onSubmitCustomer}>Save</button>
            <button type="submit" className="btn btn-default" onClick={this.onTest}>Test</button>
            <input type="reset" value="Reset" className="btn btn-default" />
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Entercust;
