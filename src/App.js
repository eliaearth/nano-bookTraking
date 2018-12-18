import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './pages/MainPage'
import SearchPage from './pages/SearchPage'

class BooksApp extends React.Component {
  state = {
    books : []
  }

  changeShelfHandler(newShelfType, bookId){
    const newBooks = this.state.books.map((book) => { 
      if ( book.id === bookId ) {
        book.shelf = newShelfType;
        BooksAPI.update(book, newShelfType)
          .then((response) => {
              console.info('update book');
          })
          .catch((err) => {
            console.error(err);
          });
      }
      
      return book;
    })
  
    this.setState((prevState) => ({
      books: newBooks
    }));
    
  }

  getAllBooks(){
      BooksAPI.getAll()
          .then((response) => {
              this.setState({
                  books: response
              });
          })
          .catch((err) => {console.error(err);})
  }

  componentDidMount(){
    this.getAllBooks();
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
            <MainPage books={this.state.books}
               changeShelfHandler={(x,y) => this.changeShelfHandler(x,y)}/>)}
        />
        <Route path='/search' render={({history}) => (
            <SearchPage books={this.state.books}
               changeShelfHandler={(x,y) => {
                   this.changeShelfHandler(x,y);
                   history.push('/');
                 }}/>)}
        />
      </div>
    )
  }
}

export default BooksApp
