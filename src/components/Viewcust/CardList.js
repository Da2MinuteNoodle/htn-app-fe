import React from 'react';
import Card from './Card';


// Rendering the card list for each customers
// Also parsing the customer array onto this form
const CardList = ({ customers, onexisting }) => {
  return (
    <div>
      {
        customers.map((user, i) => {
          return (
            <Card
              key={i}
              id={customers[i].id}
              name={customers[i].name}
              phone={customers[i].phone}
              dogname={customers[i].dogname}
              dogbreed={customers[i].dogbreed}
              dogsize={customers[i].dogsize}
              dogage={customers[i].dogage}
              specialneeds={customers[i].specialneeds}
              groomedbefore={customers[i].groomedbefore}
              next_appt={customers[i].next_appt}
              onexisting={onexisting}
            />
          );
        })
       }
    </div>
  );
}

export default CardList;
