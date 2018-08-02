import React from 'react';
import Card from './Card';

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
                next_appt={customers[i].next_appt}
                onexisting={onexisting}
              />
            );
          }
        )
       }
    </div>
  );
}

export default CardList;
