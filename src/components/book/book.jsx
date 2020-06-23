import React from 'react';
import DropDown from '../dropDown/dropDown';
import defaultBook from '../../assets/images/defaultbook.jpg';
import './book.scss';

export default function Book({
  book,
  moveShelf,
}){
  const { title, subtitle, imageLinks, authors, shelf } = book;
  
  const onClickHandler = (target) => {
    moveShelf(book, target);
  }
  return(
    <div className="book">
      <div className="book__image">
        <img src={ imageLinks ? imageLinks.thumbnail : defaultBook } alt={ subtitle } />
        <DropDown handler={ onClickHandler } shelf={ shelf }/>
      </div>
      <div className="book__copy">
        <div className="book__title">{ title }</div>
        <div className="book__author">{ authors }</div>
      </div>
    </div>
  );
}