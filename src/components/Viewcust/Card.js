import React from 'react';
import saveicon from './edit.png';

const Card = ({ name, phone, dogname, dogbreed, dogsize, dogage, specialneeds, groomedbefore }) => {
  return (
    <div className="tc applecolor dib br3 pa3 ma2 grow bw2 shadow-5">
      <div>
        <h2>{name}</h2>
        <p>{phone}</p>
        <p>{dogname}</p>
        <p>{dogbreed}</p>
        <p>{dogsize}</p>
        <p>{dogage}</p>
        <p>{specialneeds}</p>
        <p>{groomedbefore}</p>
        <button type="button" className="btn btn-info"><img src={saveicon} /></button>
      </div>
    </div>
  );
}

export default Card;
