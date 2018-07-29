import React from 'react';
import Card from './Card';

const CardList = ({ customers }) => {
  return (
    <div>
      {
        customers.map((user, i) => {
          return (
<<<<<<< HEAD
            <Card key={i}
            name={'Name: ' + customers[i].name}
            phone={'Phone: ' + customers[i].phone}
            dogname={'Dog Name: ' + customers[i].dogname}
            dogbreed={'Dog Breed: ' + customers[i].dogbreed}
            dogsize={'Dog Size: ' + customers[i].dogsize}
            dogage={'Dog Age: ' + customers[i].dogage}
            specialneeds={'Special Needs: ' + customers[i].specialneeds}
            groomedbefore={'Groomed Before: ' + customers[i].groomedbefore}
=======
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
>>>>>>> modaltesting
            />
          );
        })
       }
    </div>
  );
}

export default CardList;
