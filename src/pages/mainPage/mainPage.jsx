import React, { Component } from 'react';
import BookShelf from '../../components/bookShelf/bookShelf';
import { getAll } from '../../BooksAPI';
import './mainPage.scss';

export default class MainPage extends Component {
  state = {
    currentlyReading: null,
    wantToRead: null,
    read: null,
  }

  initializeState = () => {
    getAll()
      .then(books=>{
        const currentlyReading = new Map();
        const wantToRead = new Map();
        const read = new Map();
        
        books.forEach(book=>{
          switch(book.shelf){
            case 'read': read.set(book.id, book); break;
            case 'wantToRead': wantToRead.set(book.id, book); break;
            case 'currentlyReading': currentlyReading.set(book.id, book); break;
            default: console.log('invalid');
          }
        })

        this.setState({ 
          currentlyReading,
          wantToRead,
          read
        })
      })
  }
  componentDidMount(){
    this.initializeState();
  }

  render(){
    console.log(this.state);
    const { currentlyReading, wantToRead, read } = this.state;

    return(
      <main className="main-page">
        <h1 className="main-page__header">MyReads</h1>
        <BookShelf 
          title="Currently Reading"
          bookList={ currentlyReading }
        />
        <BookShelf 
          title="Want To Read"
          bookList={ wantToRead }
        />
        <BookShelf 
          title="Read"
          bookList={ read }
        />
      </main>
    );
  }
}