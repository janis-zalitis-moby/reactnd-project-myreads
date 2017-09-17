import React, { PropTypes } from 'react';
import './../App.css';

/**
 * Selector used to move book between shelves
 * @param {object} data          Book data
 * @param {func} onChangeShelf   Action to trigger when user wants to move book to different shelf
 */
const BookShelfChanger = ({ book, onChangeShelf }) => {
  const shelves = [
    { value: 'currentlyReading', name: 'Currently Reading' },
    { value: 'wantToRead', name: 'Want to Read' },
    { value: 'read', name: 'Read' },
    { value: 'none', name: 'None' },
  ];

  return (
    <div className="book-shelf-changer">
      <select value={(book.shelf || "none")} onChange={e => { onChangeShelf(book, e.target.value); }}>
        <option value="" disabled>Move to...</option>
        {shelves.map(s =>
          <option value={s.value} key={s.value}>{s.name}</option>)
        }
      </select>
    </div>
  );
};

BookShelfChanger.defaultProps = {
  shelf: 'none',
};

BookShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  shelf: PropTypes.string, // currently selected shelf
  onChangeShelf: PropTypes.func.isRequired,
};

export default BookShelfChanger;
