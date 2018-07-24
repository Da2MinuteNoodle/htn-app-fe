import React from 'react';
import saveicon from './edit.png';



const Card = ({ id, name, phone, dogname, dogbreed, dogsize, dogage, specialneeds, groomedbefore }) => {
  const Editcustomer = () => {
      document.getElementById('edit-form-name').value = name;
      document.getElementById('edit-form-phone').value = phone;
      document.getElementById('edit-form-dogname').value = dogname;
      document.getElementById('edit-form-dogbreed').value = dogbreed;
      document.getElementById('edit-form-dogsize').value = dogsize;
      document.getElementById('edit-form-dogage').value = dogage;
      document.getElementById('edit-form-specialneeds').value = specialneeds;
      document.getElementById('edit-form-groomedbefore').value = groomedbefore;
      console.log({name})
  }
  return (
    <div className="tc applecolor dib br3 pa3 ma2 grow bw2 shadow-5">
      <div>
        <h2>Customer Name:{name}</h2>
        <p>Phone: {phone}</p>
        <p>Dog Name: {dogname}</p>
        <p>Dog Breed: {dogbreed}</p>
        <p>Dog Size: {dogsize}</p>
        <p>Dog Age: {dogage}</p>
        <p>Special Needs: {specialneeds}</p>
        <p>Groomed Before:{groomedbefore}</p>
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
          onClick={Editcustomer}
          >
          <img src={saveicon} alt='edit' />
        </button>
      </div>
    </div>
  );
}

export default Card;
