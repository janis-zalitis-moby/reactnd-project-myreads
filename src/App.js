import React from 'react';
import { Route } from 'react-router-dom';
import './App.css'

import BookList from './containers/BookList.js';
import BookSearch from './containers/BookSearch.js';

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path='/' component={BookList}/>
        <Route path='/search' component={BookSearch}/>
      </div>
    )
  }
}

export default BooksApp;
