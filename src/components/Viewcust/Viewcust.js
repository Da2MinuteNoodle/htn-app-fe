import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

class Viewcust extends React.Component {
  constructor() {
    super()
    this.state = {
      customers: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://arcane-beyond-44438.herokuapp.com/viewcust')
      .then(response => response.json())
      .then(viewcust => this.setState({ customers: viewcust }))
      .then(console.log("log: " + this.state.customers));
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
              <CardList customers={filteredCustomers} />
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
