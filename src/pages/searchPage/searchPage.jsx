import React, { Component } from 'react';
import BookList from '../../components/bookList/bookList';
import { Link } from 'react-router-dom';
import { search, update, getAll } from '../../BooksAPI';
import SearchBar from '../../components/searchBar/searchBar';
import arrowBack from '../../assets/icons/arrow-back.svg';

import './searchPage.scss';

export default class SearchPage extends Component {
  state = {
    searchInput: '',
    bookList: [],
    myList: [],
  }

  timerId = 0;

  onChangeHandler = (e) => {
    const searchInput = e.target.value;

    clearTimeout(this.timerId);
    this.timerId = setTimeout(()=>{
      if (searchInput.length){
        search(searchInput)
          .then(data=>{
            if (data.length){
              const { myList } = this.state;
              const dataMap = this.convertArrayToMap(data);
  
              myList.forEach(book => {
                if(dataMap.has(book.id)) {
                  dataMap.set(book.id, book)
                }
              })
    
              const arrayFromMap = Object.values(Object.fromEntries(dataMap))
              this.setState({ bookList: arrayFromMap })
            } else {
              this.setState({ bookList: null })
            } 
          })
          .catch(err=>console.log(err))
      } else {
        this.setState({ bookList: [] })
      }
    },500)
    
    this.setState({ searchInput })
  } 

  componentDidMount(){
    getAll().then(data=>{
      this.setState({ myList: data })
    })
  }

  convertArrayToMap = (arr) => {
    const dataMap = new Map();
    arr.forEach(book=>{
      dataMap.set(book.id, book)
    })
    return dataMap;
  }

  moveShelf = (book, target) => {
    update(book, target)
      .then(_=>{
        const bookListCopy = this.state.bookList;
        const dataArray = this.convertArrayToMap(bookListCopy)
        const bookData = dataArray.get(book.id);
        bookData.shelf = target;
        dataArray.set(book.id, bookData);
        const arrayFromMap = Object.values(Object.fromEntries(dataArray));
        this.setState({ bookList: arrayFromMap })
      })
      .catch(err=>console.log(err))
  }

  render(){
    const { searchInput, bookList } = this.state;

    return(
      <main className="search-page">
        <div className="search-page__header">
          <Link to="/" className="search-page__image">
            <img src={arrowBack} alt="back arrow"  />
          </Link>
          <SearchBar 
            value={searchInput}
            onChangeHandler={this.onChangeHandler}
          />
        </div>
        <div className="search-page__results">
          { bookList !== null 
            ? bookList.length ? <BookList bookList={ bookList } moveShelf={ this.moveShelf } /> : null 
            : <h2>No results found...</h2>}
        </div>
      </main>
    );
  }
}