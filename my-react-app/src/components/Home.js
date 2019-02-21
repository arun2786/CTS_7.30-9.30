
import React, {Component} from 'react';
import {connect} from 'react-redux';

class Home extends Component {
    // state = {
    //     books: [
    //         { title: 'Angular', author: 'Mike', price: 22 },
    //         { title: 'React', author: 'Cart', price: 29 }
    //     ]
    // }

    addBook=(e)=>{
        let book = {title: 'New Book', author:'New Author', price: 35};
        this.props.addBook(book)
    }
    render() {
        console.log(this.props);
        let bookList = this.props.books.map((book, index) => {
            return (
                <div className="card" key={index}>
                    <div className="card-body">
                        <h5 className="card-title">{book.title}</h5>
                        <p className="card-text">Written by: {book.author}. Price: ${book.price}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            )
        })
        return (
            <div className="container">
                <button onClick={this.addBook}>Add Book</button>
               {bookList}
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {books: state.books}
}
const mapDispatchToProps = (dispatch)=>{
    return {
        addBook: (book)=>{
            dispatch({type: 'ADD_BOOK', book: book})
        },
        deleteBook: (id)=>{
            dispatch({type: 'DELETE_BOOK', id:id})
        }
    }
}
    export default connect(mapStateToProps, mapDispatchToProps)(Home);
