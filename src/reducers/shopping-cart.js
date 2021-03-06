import { 
    BOOK_ADDED_TO_CART, 
    BOOK_DELETE_FROM_CART, 
    BOOK_REMOVE_FROM_CART } from './action-types';

const updateCartItems = (cartItems, item, idx) => {
    if(item.count === 0){
        return [
                ...cartItems.slice(0, idx),
                ...cartItems.slice(idx + 1)
            ];
    }

    if(idx === -1)
        return [
            ...cartItems,
            item
        ];

    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ];

};

const updateItem = (item = {}, book, quantity) => {
    const { id = book.id, 
            title = book.title, 
            count = 0, 
            total = 0 } = item;

    return {
        id,
        title,
        count: count + quantity,
        total: total + quantity*book.price
    }
};


const updateOrder = (state, bookId, quantity) => {
    const { bookList: { books }, shoppingCart: { cartItems } } = state;
    const book = books.find( ({id}) => id === bookId);
    const itemIndex = cartItems.findIndex(({id}) => id === bookId);
    const item = cartItems[itemIndex];
    
    let newBook = updateItem(item, book, quantity);
    return {
        ...state,
        cartItems: updateCartItems(cartItems, newBook, itemIndex),
        orderTotal: state.shoppingCart.orderTotal + book.price*quantity
    };
}




const updateShoppingCart = (state, { type, payload }) => {
    if (state === undefined) {
        return {
            cartItems: [],
            orderTotal: 0
        };
    }

    switch (type){
        case BOOK_ADDED_TO_CART:
            return updateOrder(state, payload, 1);

        case BOOK_REMOVE_FROM_CART:
            return updateOrder(state, payload, -1);

        case BOOK_DELETE_FROM_CART:
            let item = state.shoppingCart.cartItems.find(({id}) => id === payload);
            return updateOrder(state, payload, -item.count);

        default: 
            return state.shoppingCart;
    }
};

export default updateShoppingCart;