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
        <Route exact path='/' render={() => (<MainPage books={this.state.books}/>)}/>
        <Route path='/search' render={() => (<SearchPage books={this.state.books}/>)}/>
      </div>
    )
  }
}

export default BooksApp
