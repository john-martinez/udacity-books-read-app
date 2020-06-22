import React, { Component } from 'react';
import SearchBar from '../../components/searchBar/searchBar';
import arrowBack from '../../assets/icons/arrow-back.svg';
import './searchPage.scss';

export default class SearchPage extends Component {
  render(){
    return(
      <main className="search-page">
        <div className="search-page__header">
          <button className="search-page__image">
            <img src={arrowBack} alt="back arrow"  />
          </button>
          <SearchBar />
        </div>
      </main>
    );
  }
}