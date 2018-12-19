import React from 'react'
import {NONE_TYPE, shelves} from './../constants/shelfType'
import './../App.css'


class BookInfo extends React.Component {
    changeShelf(event){
        if ( this.props.currentShelf.type !== event.target.value){
            this.props.changeShelfHandler(event.target.value, this.props.bookInfo);
        } 
    }
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
                        <select onChange={(event) => this.changeShelf(event)}
                                defaultValue={bookInfo.shelf}>
                                    <option value="move" disabled>Move to...</option>
                                    {shelves.map((shelf) => (
                                    <option
                                            key={shelf.type}
                                            value={shelf.type}
                                    >{shelf.title}</option>))}
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