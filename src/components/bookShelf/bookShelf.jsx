import React from 'react';
import './bookShelf.scss';

export default function BookShelf({
  title, 
  booksList,
}){
  return(
    <div className="book-shelf">
      <h2 className="book-shelf__title">{ title }</h2>
    </div>
  );
}