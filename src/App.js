import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';

import BookList from './containers/BookList';
import BookSearch from './containers/BookSearch';

class BooksApp extends Component {
  state = {
    books: [],
  }

  componentDidMount = () => this.fetchBooks();

  /** 
   * @description Moves book to target shelf
   * @param  {object} book  book
   * @param  {string} shelf shelf(.value)
   */
  onChangeShelf = (book, shelf) =>
    BooksAPI.update(book, shelf).then(
      () => this.fetchBooks()
    );

  /**
   * @description Re-fetches book data from API
   */
  fetchBooks = () =>
    BooksAPI.getAll().then(
      data => this.setState({ books: data })
    );

  render = () =>
    (
      <div className="app">
        <Route
          exact
          path="/"
          render={() =>
            (
              <BookList
                books={this.state.books}
                onChangeShelf={this.onChangeShelf}
              />
            )
          }
        />
        <Route
          path="/search"
          render={() =>
            (
              <BookSearch
                books={this.state.books}
                onChangeShelf={this.onChangeShelf}
              />
            )
          }
        />
      </div>
    );
}

export default BooksApp;
