import { 
    FETCH_BOOKS_LOADED, 
    FETCH_BOOKS_REQUEST, 
    FETCH_BOOKS_ERROR, 
    BOOK_ADDED_TO_CART,
    BOOK_DELETE_FROM_CART,
    BOOK_REMOVE_FROM_CART } from '../reducers/action-types'

const booksLoaded = (newBooks) => {
    return {
        type: FETCH_BOOKS_LOADED,
        payload: newBooks
    }
};

const booksRequest = () => {
    return {
        type: FETCH_BOOKS_REQUEST
    };
};

const booksError = (error) => {
    return {
        type: FETCH_BOOKS_ERROR,
        payload: error
    };
};

const bookAddedToCart = (id) => {
    return {
        type: BOOK_ADDED_TO_CART,
        payload: id
    };
};

const bookDelete = (id) => {
    return {
        type: BOOK_DELETE_FROM_CART,
        payload: id
    };
};

const bookRemove = (id) => {
    return {
        type: BOOK_REMOVE_FROM_CART,
        payload: id
    };
};

const fetchBooks = (bookstoreService, dispatch) => () => {
    dispatch(booksRequest());
    bookstoreService.getBooks()
    .then((books) =>{
        dispatch(booksLoaded(books));
    }).catch((error) => dispatch(booksError(error)));
}

export {
    fetchBooks,
    bookAddedToCart,
    bookDelete,
    bookRemove
};