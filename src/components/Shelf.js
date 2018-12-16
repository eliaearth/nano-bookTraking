import React from 'react'
import BookInfo from './BookInfo'

class Shelf extends React.Component {
    render() {
        const { shelfInfo, shelfBooks, changeShelfHandler } = this.props;
        const filteredBooks = shelfBooks.filter((book) => (book.shelf.toLowerCase() === shelfInfo.type));
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfInfo.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            filteredBooks.map((book) => (
                                <li key={book.id}>
                                    <BookInfo bookInfo={book} currentShelf={shelfInfo} changeShelfHandler={changeShelfHandler}/>
                                </li>))
                        }
                    </ol>
                </div>
            </div>       
        )
    }
}

export default Shelf