

const initialState = {
    books: [],
    loading: true,
    error: null
};

export const BOOKS_LOADED = 'BOOKS_LOADED';
export const BOOKS_REQUEST = 'BOOKS_REQUEST';
export const BOOKS_ERROR = 'BOOKS_ERROR';

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case BOOKS_REQUEST:
            return{
                ...state,
                loading: true,
                error: null
            };
        case BOOKS_LOADED:
            return {
                ...state,
                books: payload,
                loading: false,
                error: null
            };
        case BOOKS_ERROR:
            return{
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state;
    }
}

export default reducer;