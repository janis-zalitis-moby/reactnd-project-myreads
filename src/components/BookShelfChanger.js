import React from 'react';
import PropTypes from 'prop-types';
import './../App.css';

import BookShelves from './BookShelvesConfig';

/**
 * Selector used to move book between shelves
 * @param {object} data          Book data
 * @param {func} onChangeShelf   Action to trigger when user wants to move book to different shelf
 */
const BookShelfChanger = ({ book, onChangeShelf }) =>
  (
    <div className="book-shelf-changer">
      <select value={(book.shelf || 'none')} onChange={e => { onChangeShelf(book, e.target.value); }}>
        <option value="" disabled>Move to...</option>
        {BookShelves.map(s =>
          <option value={s.key} key={s.key}>{s.name}</option>)
        }
      </select>
    </div>
  );

BookShelfChanger.defaultProps = {
  shelf: 'none',
};

BookShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  shelf: PropTypes.string, // currently selected shelf
  onChangeShelf: PropTypes.func.isRequired,
};

export default BookShelfChanger;
