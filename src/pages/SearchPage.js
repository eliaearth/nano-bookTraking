import React from 'react'
import Search from "../components/Search";
import BookInfo from "../components/BookInfo";
import * as BooksAPI from "../BooksAPI";

class SearchPage extends React.Component {
    state = {
        searchedBooks :[]
    };

    componentDidMount(){
        this.searchBook('');
    }

    searchBook(filterTerm){
        filterTerm &&
        BooksAPI.search(filterTerm)
            .then((response) => {
                let result = response.length
                    ?  response
                    :  [];
                this.setState({
                    searchedBooks: result
                });
            }, (error) => {
                console.log('error getting books filtered')
            })
            .catch((err) => {
                console.error(err);
            })
    }

    handleChangeFilter(filter){
        this.searchBook(filter);
    }

    render() {
        const booksFiltered = this.state.searchedBooks.map((book) => {
            const bookWithShelf = this.props.books.find((b) => (b.id === book.id));
            const shelf = bookWithShelf ? bookWithShelf.shelf : "";
            return (
                <li key={book.id}>
                    <BookInfo bookInfo={book}
                              currentShelf={{type: shelf, title: shelf}}
                              changeShelfHandler={this.props.changeShelfHandler}/>
                </li>);
           });
        return (
            <div className="search-books">
                <Search onChange={(filter) => this.handleChangeFilter(filter)}/>
                <div className="search-books-results">
                    <ol className="books-grid">
                        { booksFiltered }
                    </ol>
                </div>
            </div>           
        )
    }
}

export default SearchPage