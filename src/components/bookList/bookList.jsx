import React from 'react';
import Book from '../book/book';
import './bookList.scss';

export default function bookList({
  moveShelf,
  bookList,
}){
  
  const renderBooks = () => {
    const books = [];
    bookList.forEach(book=> books.push(<Book key={book.id} book={book} moveShelf={moveShelf} />))
    return books;
  }

  return(
    <div className="book-list">
      { bookList && bookList.length ? renderBooks() : null }
    </div>
  );
}