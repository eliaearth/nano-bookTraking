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
        BooksAPI.search(filterTerm)
            .then((response) => {
                debugger;
                const result = response
                    ? (typeof response === "string" ?  [] : response )
                    : [];
                this.setState({
                    searchedBooks: result
                });
            }, (error) => {
                debugger;
                console.log('error getting books filtered')
            })
            .catch((err) => {
                debugger;
                console.error(err);
            })
    }

    handleChangeFilter(filter){
        this.searchBook(filter);
    }

    render() {
        return (
            <div className="search-books">
                <Search onChange={(filter) => this.handleChangeFilter(filter)}/>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            this.state.searchedBooks.map((book) => (
                                <li key={book.id}>
                                    <BookInfo bookInfo={book}
                                              currentShelf={{type: book.shelf, title: book.shelf}}
                                              changeShelfHandler={this.props.changeShelfHandler}/>
                                </li>))
                        }
                    </ol>
                </div>
            </div>           
        )
    }
}

export default SearchPage