import React from 'react'
import BookInfo from './BookInfo'

class Shelf extends React.Component {
    render() {
        const currentShelf = this.props.shelfInfo;
        const filteredBooks = this.props.shelfBooks.filter((book) => (book.shelf.toLowerCase() === this.props.shelfInfo.type));
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfInfo.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            filteredBooks.map((book) => (<li key={book.id}><BookInfo bookInfo={book}/></li>))
                        }
                    </ol>
                </div>
            </div>       
        )
    }
}

export default Shelf