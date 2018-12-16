import React from 'react';

class BookInfo extends React.Component {
    render() {
        const { bookInfo } = this.props;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" 
                        style={{ 
                            width: 128, 
                            height: 192, 
                            backgroundImage: `url(http://books.google.com/books/content?id=${bookInfo.id}&printsec=frontcover&img=1&zoom=1)` 
                            }}>
                    </div>
                    <div className="book-shelf-changer">
                    <select>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                    </div>
                </div>
                <div className="book-title">{bookInfo.title}</div>
                <div className="book-authors">{bookInfo.authors}</div>
            </div>
        )
    }
}

export default BookInfo