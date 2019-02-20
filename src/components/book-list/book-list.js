import React, { Component } from 'react';
import BookListItem from '../book-list-item/book-list-item';
import ErrorIndicator from '../error-indicator/error-indicator';
import styled from 'styled-components';
import Loader from '../loader/loader';
import { withBookstoreService } from '../hoc/with-bookstore-service';
import { connect } from 'react-redux';
import { booksLoaded, booksRequest, booksError } from '../../actions';
import { compose } from '../../utils/compose';

class BookList extends Component{

    
    componentDidMount(){
        const { fetchBooks } = this.props;
        fetchBooks();
    }


    render(){

        const { books, loading, error } = this.props;
        if (loading) return <Loader />;
        if (error) return <ErrorIndicator />;
        return(
            <BookWrapper>
                {
                    books.map(book => {
                        return <BookListItem key={book.id} book={book}/>;
                    })
                }
            </BookWrapper>
        )
    }
}

const mapStateToProps = ({ books, loading, error }) => {
    return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
    return{
        fetchBooks: () =>{
            dispatch(booksRequest());
            bookstoreService.getBooks()
            .then((books) =>{
                dispatch(booksLoaded(books));
            }).catch((error) => dispatch(booksError(error)));
        }
    }
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);

const BookWrapper = styled.ul`
    list-style-type: none;
    padding: 0;
`;

