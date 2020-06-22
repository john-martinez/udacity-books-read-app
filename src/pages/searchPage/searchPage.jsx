import React, { Component } from 'react';
import BookList from '../../components/bookList/bookList';
import { Link } from 'react-router-dom';
import { search } from '../../BooksAPI';
import SearchBar from '../../components/searchBar/searchBar';
import arrowBack from '../../assets/icons/arrow-back.svg';

import './searchPage.scss';

export default class SearchPage extends Component {
  state = {
    searchInput: '',
    bookList: [],
  }

  onChangeHandler = (e) => {
    const searchInput = e.target.value;

    if (searchInput.length){
      search(searchInput)
        .then(res=>{
          const data = Array.isArray(res) ? res : []
          this.setState({ 
            bookList: data,
          })
        })
        .catch(err=>console.log(err))
    }

    this.setState({ searchInput })
  } 

  componentDidUpdate(){
    console.log(this.state)
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