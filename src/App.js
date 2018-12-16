import React from 'react'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './pages/MainPage'
import SearchPage from './pages/SearchPage'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route path='/main' component={MainPage}/>
        <Route exact path='/search' component={SearchPage}/>
      </div>
    )
  }
}

export default BooksApp
