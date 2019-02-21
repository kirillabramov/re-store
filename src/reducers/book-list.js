import { 
    FETCH_BOOKS_ERROR, 
    FETCH_BOOKS_LOADED, 
    FETCH_BOOKS_REQUEST } from './action-types';

const updateBookList = (state, { type, payload }) => {
    if (state === undefined) {
        return {
                books: [],
                loading: true,
                error: null,
        };
    }
    
    switch (type){
        case FETCH_BOOKS_REQUEST:
            return{
                loading: true,
                error: null
            };

        case FETCH_BOOKS_LOADED:
            return {
                books: payload,
                loading: false,
                error: null
            };

        case FETCH_BOOKS_ERROR:
            return{
                loading: false,
                error: payload
            };
        default: 
            return state.bookList;
    }
};

export default updateBookList;