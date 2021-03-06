import React from 'react';
import saveicon from './edit.png';

// THis function creates a new card for each of the customers in a database

const Card = ({ id, name, phone, dogname, dogbreed, dogsize, dogage, specialneeds, groomedbefore, onexisting, next_appt }) => {
  const Editcustomer = () => {
      document.getElementById('edit-form-name').value = name;
      document.getElementById('edit-form-customerid').value = id;
      document.getElementById('edit-form-phone').value = phone;
      document.getElementById('edit-form-dogname').value = dogname;
      document.getElementById('edit-form-dogbreed').value = dogbreed;
      document.getElementById('edit-form-dogsize').value = dogsize;
      document.getElementById('edit-form-dogage').value = dogage;
      document.getElementById('edit-form-specialneeds').value = specialneeds;
      document.getElementById('edit-form-apptdate').value = next_appt;
      console.log(id)
  }

  const Onclick = () => {
    Editcustomer()
    onexisting()
  }

  // Just setting the next appointment to nothign if there is none

  const CheckNextAppt = () => {
    if (next_appt === null) {
      return (<p>No Next Appointment</p>)
    } else {
      return (next_appt.split('T')[0])
    }
  }

  // Rendering the final function with the fprovided info from the CardList.js

  return (
    <div className="tc applecolor dib br3 pa3 ma2 dim bw2 shadow-5">
      <div>
        <h2>Name: {name}</h2>
        <p>Id: {id}</p>
        <p>Phone: {phone}</p>
        <p>Dog Name: {dogname}</p>
        <p>Dog Breed: {dogbreed}</p>
        <p>Dog Size: {dogsize}</p>
        <p>Dog Age: {dogage}</p>
        <p>Special Needs: {specialneeds}</p>
        <p>Next Appointment: {CheckNextAppt()}</p>
        <button
          type="button"
          className="btn applecolor"
          data-toggle="modal"
          data-target="#editFormModal"
          data-id={id}
          data-name={name}
          data-phone={phone}
          data-dogname={dogname}
          data-dogbreed={dogbreed}
          data-dogsize={phone}
          data-dogage={dogage}
          data-specialneeds={specialneeds}
          data-groomedbefore={groomedbefore}
          data-next_appt={next_appt}
          onClick={Onclick}
          >
          <img src={saveicon} alt='edit' />
        </button>
      </div>
    </div>
  );
}

export default Card;
