import React, { Component } from 'react';
import BookListItem from '../book-list-item/book-list-item';
import styled from 'styled-components';
import { withBookstoreService } from '../hoc/with-bookstore-service';
import { connect } from 'react-redux';
import { booksLoaded } from '../../actions';
import { compose } from '../../utils/compose';

class BookList extends Component{

    
    componentDidMount(){
        const { bookstoreService, booksLoaded } = this.props;
        const books = bookstoreService.getBooks();

        booksLoaded(books);
    }


    render(){

        const { books } = this.props;

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

const mapStateToProps = ({ books }) => {
    return { books };
};


export default compose(
    withBookstoreService(),
    connect(mapStateToProps, { booksLoaded })
)(BookList);

const BookWrapper = styled.ul`
    list-style-type: none;
    padding: 0;
`;

