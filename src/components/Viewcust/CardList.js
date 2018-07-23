import React from 'react';
import Card from './Card';

const CardList = ({ customers }) => {
  return (
    <div>
      {
        customers.map((user, i) => {
          return (
            <Card key={i}
            name={'Name: ' + customers[i].name}
            phone={'Phone: ' + customers[i].phone}
            dogname={'Dog Name: ' + customers[i].dogname}
            dogbreed={'Dog Breed: ' + customers[i].dogbreed}
            dogsize={'Dog Size: ' + customers[i].dogsize}
            dogage={'Dog Age: ' + customers[i].dogage}
            specialneeds={'Special Needs: ' + customers[i].specialneeds}
            groomedbefore={'Groomed Before: ' + customers[i].groomedbefore}
            />
          );
        })
       }
    </div>
  );
}

export default CardList;
