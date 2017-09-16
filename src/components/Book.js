import React, { Component, PropTypes } from 'react'
import './../App.css'

import BookShelfChanger from './BookShelfChanger.js';

class Book extends Component {
  render() {
    const { data, onChangeShelf } = this.props;
    
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${data.imageLinks.smallThumbnail}")` }}></div>
          <BookShelfChanger book={data} shelf={data.shelf} onChangeShelf={onChangeShelf} />
        </div>
        <div className="book-title">{data.title}</div>
        {data.authors && data.authors.length ? // some books have no authors listed
          <div className="book-authors">{data.authors.join(', ')}</div>
          : null
        }
      </div>
    );
  }
}

Book.propTypes = {
  data: PropTypes.object.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};

export default Book;
