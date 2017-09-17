import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './../BooksAPI';
import './../App.css';

import BookShelf from '../components/BookShelf';

class BookList extends Component {
  state = {
    books: [],
  }

  componentDidMount = () => this.updateBookData();

  /** 
   * Moves book to target shelf
   * @param  {object} book  book
   * @param  {string} shelf shelf(.value)
   */
  onChangeShelf = (book, shelf) =>
    BooksAPI.update(book, shelf).then(
      () => this.updateBookData()
    );

  /**
   * Re-fetches book data from API
   */
  updateBookData = () =>
    BooksAPI.getAll().then(
      data => this.setState({ books: data })
    );

  render() {
    const { books } = this.state;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        {books.length ?
          <div className="list-books-content">
            <div>
              <BookShelf
                title="Currently Reading"
                books={books.filter(book => book.shelf === 'currentlyReading')}
                onChangeShelf={this.onChangeShelf}
              />
              <BookShelf
                title="Want to Read"
                books={books.filter(book => book.shelf === 'wantToRead')}
                onChangeShelf={this.onChangeShelf}
              />
              <BookShelf
                title="Read"
                books={books.filter(book => book.shelf === 'read')}
                onChangeShelf={this.onChangeShelf}
              />
            </div>
          </div>
          : null
        }
        <div className="open-search">
          <Link to="/search">Search</Link>
        </div>
      </div>
    );
  }
}

export default BookList;
