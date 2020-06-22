import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/searchBar/searchBar';
import arrowBack from '../../assets/icons/arrow-back.svg';
import './searchPage.scss';

export default class SearchPage extends Component {
  state = {
    searchInput: ''
  }

  onChangeHandler = (e) => this.setState({ searchInput: e.target.value })
  render(){
    const { searchInput } = this.state;

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
      </main>
    );
  }
}