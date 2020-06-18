import React from 'react';
import DropDown from '../dropDown/dropDown';
import './book.scss';

export default function Book({
  book,
  moveShelf,
}){
  const { title, subtitle, imageLinks, authors } = book;
  
  const onClickHandler = (target) => {
    moveShelf(book, target);
  }
  return(
    <div className="book">
      <div className="book__image">
        <img src={ imageLinks.thumbnail } alt={ subtitle } />
        <DropDown handler={ onClickHandler }/>
      </div>
      <div className="book__copy">
        <div className="book__title">{ title }</div>
        <div className="book__author">{ authors[0] }</div>
      </div>
    </div>
  );
}