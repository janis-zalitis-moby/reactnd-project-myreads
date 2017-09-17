import React from 'react';
import PropTypes from 'prop-types';
import './../App.css';

import BookShelfChanger from './BookShelfChanger';

/**
 * Outputs a single book 
 * @param {object} data          Book data
 * @param {func} onChangeShelf   Action to trigger when user wants to move book to different shelf
 */
const Book = ({ data, onChangeShelf }) =>
  (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ backgroundImage: `url("${data.imageLinks.smallThumbnail}")` }} />
        <BookShelfChanger book={data} onChangeShelf={onChangeShelf} />
      </div>
      <div className="book-title">{data.title}</div>
      {data.authors && data.authors.length // some books have no authors listed
        ? <div className="book-authors">{data.authors.join(', ')}</div>
        : null
      }
    </div>
  );

Book.propTypes = {
  data: PropTypes.object.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};

export default Book;
