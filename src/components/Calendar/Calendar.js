import React from 'react';
import CardList from './CardList';

class Booking extends React.Component {
  constructor(  ) {
    super();
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

  componentDidMount() {
    fetch('https://arcane-beyond-44438.herokuapp.com/viewcust')
      .then(response => response.json())
      .then(viewcust => this.setState({ customers: viewcust }));
  }

  render() {
    const { customers } = this.state;
    const filteredCustomers = customers.filter(customer =>{
      return customer.name.toLowerCase()
    })
      return !customers.length ?
      <h1>Loading</h1> :
      (
      <div className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center applecolor">
        <CardList customers={filteredCustomers} onexisting={this.onExisting} />
      </div>
    );
  }
}

export default Booking;
