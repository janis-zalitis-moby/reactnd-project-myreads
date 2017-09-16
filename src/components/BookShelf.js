import React, { Component, PropTypes } from 'react'
import './../App.css'

import Book from './Book.js';

class BookShelf extends Component {
  render() {
    const { title, books, onChangeShelf } = this.props;
    
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => <li key={book.id}><Book data={book} onChangeShelf={onChangeShelf} /></li>)}
          </ol>
        </div>
      </div>
    );
  }
}

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};

export default BookShelf;
