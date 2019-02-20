

const initialState = {
    books: []
};

export const BOOKS_LOADED = 'BOOKS_LOADED';

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case BOOKS_LOADED:
            return {
                ...state,
                books: payload
            };
        default:
            return state;
    }
}

export default reducer;