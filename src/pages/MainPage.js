import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from './../components/Shelf'
import {READING,WANTED,READ} from './../constants/shelfType'
import {shelves} from './../constants/shelfType'

class MainPage extends React.Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                     <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {shelves.map((shelf) => (<Shelf key={shelf.type} shelfInfo={shelf} shelfBooks={this.props.books}/>))}
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'><button>Add a book</button></Link>
                </div>
            </div>
        )
    }
}

export default MainPage