import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lighttest-blue'
        type='search'
        placeholder="search customers"
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;
