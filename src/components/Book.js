import React, { PropTypes } from 'react';
import './../App.css';

import BookShelfChanger from './BookShelfChanger';

const Book = ({ data, onChangeShelf }) =>
  (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ backgroundImage: `url("${data.imageLinks.smallThumbnail}")` }} />
        <BookShelfChanger book={data} shelf={data.shelf} onChangeShelf={onChangeShelf} />
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
