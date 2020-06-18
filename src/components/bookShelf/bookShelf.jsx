import React from 'react';
import Book from '../book/book';
import './bookShelf.scss';

export default function BookShelf({
  title, 
  bookList,
}){

  const renderBooks = () => {
    const books = [];
    bookList.forEach(book=> books.push(<Book key={book.id} book={book} />))
    return books;
  }

  return(
    <div className="book-shelf">
      <h2 className="book-shelf__title">{ title }</h2>
      <div className="book-shelf__book-list">
        { bookList && bookList.size && renderBooks() }
      </div>
    </div>
  );
}