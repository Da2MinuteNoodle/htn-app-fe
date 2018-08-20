import React from 'react';
import Alert from 'react-s-alert';

// Defining the entercust function and then immedietly setting state

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
    }
  }

  // Handeling the alerts

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

    // Again setting the existing values of the boxes, by default its null

    onExisting = () => {
      this.setState({custName: document.getElementById('edit-form-name').value});
      this.setState({custPhone: document.getElementById('edit-form-phone').value});
      this.setState({dogName: document.getElementById('edit-form-dogname').value});
      this.setState({dogBreed: document.getElementById('edit-form-dogbreed').value});
      this.setState({dogSize: document.getElementById('edit-form-dogsize').value});
      this.setState({dogAge: document.getElementById('edit-form-dogage').value});
      this.setState({specialNeeds: document.getElementById('edit-form-specialneeds').value});
    }

    // As the values of the text box changes, so does state

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

  // Submit info is clicked this function gets caled to send info to the back end.

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

  // check is groomed before is a boolean but is not included.

  boolCheck = () => {
    // if (this.state.specialNeeds === "on") {
    //   this.state.specialNeeds = true
    // } else {
    //   this.state.specialNeeds = false
    // }
    if (this.state.groomedBefore === 'on') {
      this.state.groomedBefore = true
    } else {
      this.state.groomedBefore = false
    }
  }

  // When a customer is submited this function is called

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

  // Rendering the final function on the page.

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
              <div className="form-group">
                <label htmlFor="phone">Special Needs?</label>
                <input type="text" className="form-control" id='edit-form-specialneeds' onChange={this.onSpecialNeedsChange} />
              </div>
            </div>
            <button type="submit" className="btn btn-default" onClick={this.onSubmitCustomer}>Save</button>
            <input type="reset" value="Reset" className="btn btn-default" />
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Entercust;
