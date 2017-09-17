import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './../App.css';

import BookShelf from '../components/BookShelf';
import BookShelves from '../components/BookShelvesConfig';

/** 
 * Outputs a page with a list of books split by shelves
 * Uses pre-defined shelves:
 * [
 *  { currentlyReading: "Currently Reading" }
 *  { wantToRead: "Want to Read" }
 *  { read: "Read" }
 * ]
 */
const BookList = ({ books, onChangeShelf }) =>
  (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      {books.length ?
        <div className="list-books-content">
          <div>
            {BookShelves.filter(s => !s.hideShelf).map(s => (
              <BookShelf
                title={s.name}
                key={s.key}
                books={books.filter(book => book.shelf === s.key)}
                onChangeShelf={onChangeShelf}
              />
            ))}
          </div>
        </div>
        : null
      }
      <div className="open-search">
        <Link to="/search">Search</Link>
      </div>
    </div>
  );

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};

export default BookList;
