import React from 'react';
import { Wrapper } from '../app/app';
import BookList from '../book-list/book-list';
import ShoppingCartTable from '../shopping-cart-table/shopping-cart-table';

const HomePage = () =>{
    return(
        <Wrapper>
            <BookList />

            <ShoppingCartTable />
        </Wrapper>
    )
};

export default HomePage;


