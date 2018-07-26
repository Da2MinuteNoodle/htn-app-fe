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
              dogname={customers[i].dogname}
              dogbreed={customers[i].dogbreed}
              dogsize={customers[i].dogsize}
              dogage={customers[i].dogage}
              specialneeds={customers[i].specialneeds}
              groomedbefore={customers[i].groomedbefore}
              onexisting={onexisting}
            />
          );
        })
       }
    </div>
  );
}

export default CardList;
