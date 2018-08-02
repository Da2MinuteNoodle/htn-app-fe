import React from 'react';

const Card = ({ id, name, phone, onexisting, next_appt }) => {
  // const Editcustomer = () => {
  //     document.getElementById('edit-form-name').value = name;
  //     document.getElementById('edit-form-phone').value = phone;
  //     document.getElementById('edit-form-apptdate').value = next_appt;
  //     console.log(id)
  // }

  return (
    <div className="tc applecolor dib br3 pa3 ma2 dim bw2 shadow-5">
      <div>
        <h2>Name: {name}</h2>
        <p>Id: {id}</p>
        <p>Phone: {phone}</p>
        <p>Next Appointment: {next_appt}</p>
      </div>
    </div>
  );
}

export default Card;
