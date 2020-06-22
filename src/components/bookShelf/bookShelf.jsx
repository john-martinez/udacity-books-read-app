import React from 'react';
import BookList from '../bookList/bookList';
import './bookShelf.scss';

export default function BookShelf({
  title, 
  bookList,
  moveShelf,
}){

  return(
    <div className="book-shelf">
      <h2 className="book-shelf__title">{ title }</h2>
      <div className="book-shelf__book-list">
        { 
          <BookList 
            moveShelf={moveShelf}
            bookList={bookList}
          /> 
        }
      </div>
    </div>
  );
}