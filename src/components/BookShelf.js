import React, { PropTypes } from 'react';
import './../App.css';

import Book from './Book';

/**
 * Book shelf, displays a collection of books
 * @param {string} title         Title of book shelf
 * @param {array} books          Collection of books to display
 * @param {func} onChangeShelf   Action to trigger when user wants to move book to different shelf
 */
const BookShelf = ({ title, books, onChangeShelf }) =>
  (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => <li key={book.id}><Book data={book} onChangeShelf={onChangeShelf} /></li>)}
        </ol>
      </div>
    </div>
  );

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};

export default BookShelf;
