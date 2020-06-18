import React from 'react';
import './book.scss';

export default function Book({
  book
}){
  const { title, subtitle, imageLinks, authors } = book;
  
  return(
    <div className="book">
      <div className="book__image">
        <img src={ imageLinks.thumbnail } alt={ subtitle } />
      </div>
      <div className="book__copy">
        <div className="book__title">{ title }</div>
        <div className="book__author">{ authors[0] }</div>
      </div>
    </div>
  );
}