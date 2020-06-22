import React from 'react';
import './searchBar.scss';

export default function SearchBar({
  value,
  onChangeHandler,
}){
  return(
    <div className="search-bar">
      <input 
        className="search-bar__input"
        type="text" 
        aria-label="search bar" 
        name="search"
        placeholder="Search by title or author"
        value={value}
        onChange={onChangeHandler}
      />
    </div>
  );
}