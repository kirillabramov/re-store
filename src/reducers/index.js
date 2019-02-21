import updateBookList from './book-list';
import updateShoppingCart from './shopping-cart';

const reducer = (state, { type, payload }) => {
    return {
        bookList: updateBookList(state, { type, payload }),
        shoppingCart: updateShoppingCart(state, { type, payload })        
    }
}

export default reducer;