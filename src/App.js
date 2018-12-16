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

  changeShelfHandler(newShelf, bookId){
    const newBooks = this.state.books.map((book) => { 
      if ( book.id === bookId ) book.shelf = newShelf;
      return book;
    })
  
    this.setState((prevState) => ({
      books: newBooks
    }));
  }


  componentDidMount(){
    BooksAPI.getAll()
      .then((response) => {
        this.setState({
          books: response
        });
      })
      .catch(() => {})
  }
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <MainPage books={this.state.books} 
            changeShelfHandler={(x,y) => this.changeShelfHandler(x,y)}/>)}/>
        <Route path='/search' render={() => (<SearchPage books={this.state.books}/>)}/>
      </div>
    )
  }
}

export default BooksApp
