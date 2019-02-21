import React, { Component } from 'react';
import BookListItem from '../book-list-item/book-list-item';
import ErrorIndicator from '../error-indicator/error-indicator';
import styled from 'styled-components';
import Loader from '../loader/loader';
import { withBookstoreService } from '../hoc/with-bookstore-service';
import { connect } from 'react-redux';
import { fetchBooks, bookAddedToCart } from '../../actions';
import { compose } from '../../utils/compose';



const BookList = ({ books, onAddedToCart }) => {
    return(
        <BookWrapper>
            {
                books.map(book => {
                    return <BookListItem 
                            key={book.id} 
                            book={book} 
                            onAddedToCart={() => onAddedToCart(book.id)}/>;
                })
            }
        </BookWrapper>
    )
};

class BookListContainer extends Component{

    componentDidMount(){
        const { fetchBooks } = this.props;
        fetchBooks();
    }

    render(){
        const { books, loading, error, onAddedToCart } = this.props;
        if (loading) return <Loader />;
        if (error) return <ErrorIndicator />;
        return <BookList 
                books={books}
                onAddedToCart={onAddedToCart} />
    }
}

const mapStateToProps = ({ bookList: { books, loading, error }}) => {
    return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
    return{
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    }
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);

const BookWrapper = styled.ul`
    list-style-type: none;
    padding: 0;
`;

