import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

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
      groomedBefore: ''
    }
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



  onEditInfo = () => {
    console.log(this.state)
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
        groomedbefore: this.state.groomedBefore
      })
    })
      .then(response => response.json())
      .then(this.props.onRouteChange('viewcust'))
  }

  componentDidMount() {
    fetch('https://arcane-beyond-44438.herokuapp.com/viewcust')
      .then(response => response.json())
      .then(viewcust => this.setState({ customers: viewcust }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
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
                        </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onLoad={this.onExisting} onClick={this.onEditInfo} data-dismiss="modal">Save changes</button>
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