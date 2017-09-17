import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import BookList from './containers/BookList';
import BookSearch from './containers/BookSearch';

const BooksApp = () =>
  (
    <div className="app">
      <Route exact path="/" component={BookList} />
      <Route path="/search" component={BookSearch} />
    </div>
  );

export default BooksApp;
