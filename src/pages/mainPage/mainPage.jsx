import React, { Component } from 'react';
import BookShelf from '../../components/bookShelf/bookShelf';
import FloatingButton from '../../components/floatingButton/floatingButton';
import { getAll, update } from '../../BooksAPI';
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
        const currentlyReading = [];
        const wantToRead = [];
        const read = [];
        
        books.forEach(book=>{
          switch(book.shelf){
            case 'read': read.push(book); break;
            case 'wantToRead': wantToRead.push(book); break;
            case 'currentlyReading': currentlyReading.push(book); break;
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

  moveShelf = (book, target) => {
    update(book, target)
      .then(_=>this.initializeState())
      .catch(err=>console.log(err))
  }

  componentDidMount(){
    this.initializeState();
  }

  render(){
    const { currentlyReading, wantToRead, read } = this.state;
    const { moveShelf } = this;

    return(
      <main className="main-page">
        <h1 className="main-page__header">MyReads</h1>
        <BookShelf 
          title="Currently Reading"
          bookList={ currentlyReading }
          moveShelf={ moveShelf }
        />
        <BookShelf 
          title="Want To Read"
          bookList={ wantToRead }
          moveShelf={ moveShelf }
        />
        <BookShelf 
          title="Read"
          bookList={ read }
          moveShelf={ moveShelf }
        />
        <FloatingButton />
      </main>
    );
  }
}