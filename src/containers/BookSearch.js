import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './../BooksAPI';
import './../App.css'

import Book from '../components/Book.js';

class BookSearch extends Component {
  state = {
    query: '',
    books: [],
  }
  
  updateBookData = () =>
    BooksAPI.search(this.state.query, 99).then((data) =>
      this.setState({ books: data })
    );
  
  updateQuery = (query) =>
    this.setState(
      { query: query.trim() },
      () => { this.updateBookData() }
    );
  
  /** 
   * Moves book to target shelf
   * @param  {string} book  book.id
   * @param  {string} shelf shelf(.value)
   */
  onChangeShelf = (book, shelf) =>
    BooksAPI.update(book, shelf);
  
  render() {
    const { books } = this.state;

    console.info('found books: ', books);

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" onChange={(event) => this.updateQuery(event.target.value)}/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.length ? // gives error if API response contains an error instead of data array
              books.map(book => <li key={book.id}><Book data={book} onChangeShelf={this.onChangeShelf} /></li>)
              : null
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default BookSearch;