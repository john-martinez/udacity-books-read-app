import React, { Component } from 'react';
import BookList from '../../components/bookList/bookList';
import { Link } from 'react-router-dom';
import { search, getall, getAll } from '../../BooksAPI';
import SearchBar from '../../components/searchBar/searchBar';
import arrowBack from '../../assets/icons/arrow-back.svg';

import './searchPage.scss';

export default class SearchPage extends Component {
  state = {
    searchInput: '',
    bookList: [],
    myList: [],
  }

  onChangeHandler = (e) => {
    const searchInput = e.target.value;

    if (searchInput.length){
      search(searchInput)
        .then(data=>{
          const { myList } = this.state;
          const dataMap = this.convertArrayToMap(data);

          myList.forEach(book => {
            if(dataMap.has(book.id)) {
              dataMap.set(book.id, book)
            }
          })

          const arrayFromMap = Object.values(Object.fromEntries(dataMap))
          console.log(arrayFromMap)
          this.setState({ bookList: arrayFromMap })
        })
        .catch(err=>console.log(err))
    } else {
      this.setState({ bookList: [] })
    }
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
          { bookList.length ? <BookList bookList={ bookList } /> : null }
        </div>
      </main>
    );
  }
}