import { BOOKS_LOADED } from '../reducers'

const booksLoaded = (newBooks) => {
    return{
        type: BOOKS_LOADED,
        payload: newBooks
    }
};

export {
    booksLoaded
};