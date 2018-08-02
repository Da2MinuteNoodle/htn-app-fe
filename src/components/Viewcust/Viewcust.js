import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import Alert from 'react-s-alert';
import deleteicon from './deleteicon.png';

class Viewcust extends React.Component {
  constructor() {
    super()
    this.state = {
      customers: [],
      searchfield: '',
      custId: '',
      custName: '',
      custPhone: '',
      dogName: '',
      dogBreed: '',
      dogSize: '',
      dogAge: '',
      specialNeeds: '',
      groomedBefore: '',
      nextAppt: '',
    }
  }

  handleClick1() {
        Alert.info('Customer Deleted', {
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
        Alert.error('Error Deleting Customer', {
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
    this.setState({custId: document.getElementById('edit-form-customerid').value});
    this.setState({custName: document.getElementById('edit-form-name').value});
    this.setState({custPhone: document.getElementById('edit-form-phone').value});
    this.setState({dogName: document.getElementById('edit-form-dogname').value});
    this.setState({dogBreed: document.getElementById('edit-form-dogbreed').value});
    this.setState({dogSize: document.getElementById('edit-form-dogsize').value});
    this.setState({dogAge: document.getElementById('edit-form-dogage').value});
    this.setState({specialNeeds: document.getElementById('edit-form-specialneeds').value});
    this.setState({groomedBefore: document.getElementById('edit-form-groomedbefore').value});
    this.setState({nextAppt: document.getElementById('edit-form-apptdate').value});
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

   onApptChange = (event) => {
     this.setState({nextAppt: event.target.value})
 }


  onEditInfo = () => {
    fetch('https://arcane-beyond-44438.herokuapp.com/editcust', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: Number(this.state.custId),
        name: this.state.custName,
        phone: this.state.custPhone,
        dogname: this.state.dogName,
        dogbreed: this.state.dogBreed,
        dogsize: this.state.dogSize,
        dogage: this.state.dogAge,
        specialneeds: this.state.specialNeeds,
        groomedbefore: this.state.groomedBefore,
        next_appt: this.state.nextAppt,
      })
    })
      .then(response => response.json())
      .then(this.props.onRouteChange('home'))
  }

  componentDidMount() {
    fetch('https://arcane-beyond-44438.herokuapp.com/viewcust')
      .then(response => response.json())
      .then(viewcust => this.setState({ customers: viewcust }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  onDeleteInfo = () => {
    fetch('https://arcane-beyond-44438.herokuapp.com/deletecust', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: Number(this.state.custId)
      })
    })
    .then(response => response.json())
    .then(response => {
      if (response === 'Incorrect form submission') {
        this.handleClick3()
      } else if (response === 'unable to delete customer') {
        this.handleClick3()
      } else {
        this.handleClick1()
        this.props.onRouteChange('home')
      }
    })
  }

  render() {
        const { customers, searchfield } = this.state;
        const filteredCustomers = customers.filter(customer =>{
          return customer.name.toLowerCase().includes(searchfield.toLowerCase())
        })
          return !customers.length ?
          <h1>Loading</h1> :
          (
            <div className='tc'>
              <h1 className="f1">Customers</h1>
              <SearchBox searchChange={this.onSearchChange} />
              <Scroll>
                <CardList customers={filteredCustomers} onexisting={this.onExisting} />
                <div>
                  <div className="modal fade" id="editFormModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <input type="hidden" id="edit-form-id" name="id" />
                          <h5 className="modal-title" id="exampleModalLabel">Edit Customer</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <div className="form-group">
                            <label htmlFor="id">Id:</label>
                            <input type="text" className="form-control" id="edit-form-customerid" disabled name="customerid" />
                          </div>
                          <div className="form-group">
                            <label htmlFor="usr">Customer Name:</label>
                            <input type="text" className="form-control" id="edit-form-name" name="name" onChange={this.onCustNameChange} />
                          </div>
                          <div className="form-group">
                            <label htmlFor="phone">Customer Phone:</label>
                            <input type="tel" className="form-control" id="edit-form-phone" name="phone" onChange={this.onCustPhoneChange} />
                          </div>
                          <div className="form-group">
                            <label htmlFor="phone">Dog Name:</label>
                            <input type="text" className="form-control" id="edit-form-dogname" name="dogname" onChange={this.onDogNameChange} />
                          </div>
                          <div className="form-group">
                            <label htmlFor="dogBreed">Dog Breed:</label>
                            <input type="text" className="form-control" id="edit-form-dogbreed" name="dogbreed" onChange={this.onDogBreedChange} />
                          </div>
                          <div className="form-group">
                            <label htmlFor="phone">Dog Size:</label>
                            <input type="text" className="form-control" id="edit-form-dogsize" name="dogsize" onChange={this.onDogSizeChange} />
                          </div>
                          <div className="form-group">
                            <label htmlFor="phone">Dog Age:</label>
                            <input type="text" className="form-control" id="edit-form-dogage" name="dogage" onChange={this.onDogAgeChange} />
                          </div>
                          <div className="radio">
                            Special Needs?<br />
                            <label><input type="checkbox" name="check1" id="edit-form-specialneeds" onChange={this.onSpecialNeedsChange} />Yes</label>
                          </div>
                          <div className="radio">
                            Grommed Before?<br />
                            <label><input type="checkbox" name="check2" id="edit-form-groomedbefore" onChange={this.onGroomedBeforeChange} />Yes</label>
                          </div>
                          <div className="form-group">
                            <label htmlFor="date">Next Appointment:</label>
                            <input type="date" className="form-control" id="edit-form-apptdate" name="apptdate" onChange={this.onApptChange} />
                          </div>
                          </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="button" className="btn btn-primary" onLoad={this.onExisting} onClick={this.onEditInfo} data-dismiss="modal">Save changes</button>
                          <button type="button" className="btn applecolor" data-dismiss="modal" data-toggle="modal" data-target="#deleteModal">Delete Customer <img src={deleteicon} alt='delete' /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="deleteModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Delete Customer?</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          Are you sure you want to delete this customer?
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                          <button type="button" class="btn btn-primary" onClick={this.onDeleteInfo} data-dismiss="modal">Delete Customer</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Scroll>
            </div>
          );
      }
  }



//   render() {
//     // const listItems = this.state.data.map((d) => <li key={d.name}>{d.name}</li>);
//     return(
//       <div className="main-container">
//         <div className="menu-container-info">
//           <div className="enter-cust row" method="get">
//             <button>Test</button>
//             <h2>Test</h2>
//         </div>
//       </div>
//     </div>
//     );
//   }
// }

export default Viewcust;
