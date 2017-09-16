import React, { Component, PropTypes } from 'react'
import './../App.css'

class BookShelfChanger extends Component {
  render() {
    
    const shelves = [
      { value: 'currentlyReading', name: 'Currently Reading' },
      { value: 'wantToRead', name: 'Want to Read' },
      { value: 'read', name: 'Read' },
      { value: 'none', name: 'None' }
    ];
    
    const { book, shelf, onChangeShelf } = this.props;
    
    return (
      <div className="book-shelf-changer">
        <select value={shelf} onChange={(e) => { onChangeShelf(book, e.target.value); }}>
          <option value="none" disabled>Move to...</option>
          {shelves.map(s => 
            <option value={s.value} key={s.value}>{s.name}</option>)
          }
        </select>
      </div>
    );
  }
}

BookShelfChanger.defaultProps = {
  shelf: 'none',
};

BookShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  shelf: PropTypes.string, // currently selected shelf
  onChangeShelf: PropTypes.func.isRequired,
};

export default BookShelfChanger;
