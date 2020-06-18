import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from './pages/mainPage/mainPage';
import SearchPage from './pages/searchPage/searchPage';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage}></Route>
          <Route exact path="/search" component={SearchPage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
