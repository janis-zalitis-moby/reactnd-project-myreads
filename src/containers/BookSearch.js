import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { debounce } from 'throttle-debounce';
import * as BooksAPI from './../BooksAPI';
import './../App.css';

import Book from '../components/Book';

/**
 * @description Outputs a page with search bar and results
 * Searches in books and displays grid of results
 */
class BookSearch extends Component {
  state = {
    query: '',
    results: [],
    loading: false, // we're loading the search query results
    loaded: false, // query results have been loaded
  }

  componentDidMount = () => this.searchInput.focus();

  /**
   * @description Updates search query from user input
   * uses callback to start fetching results
   * @param  {string} query string the user has input
   */
  updateQuery = debounce(400, query =>
    this.setState(
      { query: query.trim() },
      () => this.searchBooks()
    ));

  /**
   * @description Fetches search results and updates state
   */
  searchBooks = () => {
    this.setState({ loading: true });
    BooksAPI.search(this.state.query, 99).then(
      data => this.setState({ results: data, loading: false, loaded: true })
    );
  }

  render() {
    const { results, loading, loaded } = this.state;
    const { books, onChangeShelf } = this.props;

    const fallbackMessage = loading ? 'Searching..' : (loaded ? 'No books found. Try different search.' : 'Type to search.');

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
            <input
              ref={input => { this.searchInput = input; }}
              type="text"
              placeholder="Search by title or author"
              onChange={event => this.updateQuery(event.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {results.length // gives error if API response contains an error instead of data array
              ? results.map(book => {
                const myBook = books.find(b => b.id === book.id); // attempt to find the same in my shelf
                if (myBook) {
                  // update shelf status from my own books
                  book.shelf = myBook.shelf;
                }
                return <li key={book.id}><Book data={book} onChangeShelf={onChangeShelf} /></li>;
              })
              : fallbackMessage
            }
          </ol>
        </div>
      </div>
    );
  }
}

BookSearch.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};

export default BookSearch;
