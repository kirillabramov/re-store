import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = ({ numItems, total }) => {
    return(
        <HeaderWrapper>
            <Logo className="text-dark" to="/re-store/">ReStore</Logo>
            <ShoppingCart to="/cart/">
                <ShoppingCartIcon className="fa fa-shopping-cart" />
                {numItems} {numItems === 1 ? 'item' : 'items'} (${total})
            </ShoppingCart>
        </HeaderWrapper>
    )
};


export default Header;


const Logo = styled(Link)`
    font-family: 'Playfair Display' , sans-serif;
    font-size: 40px;
    &:hover{
        text-decoration: none;
    }
`;
const HeaderWrapper = styled.div`
    max-width: 1040px;
    margin: 0 auto;
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between; 
`;

const ShoppingCart = styled(Link)`
    align-self: center;
    font-size: 18px;
`;
const ShoppingCartIcon = styled.i`
    font-size: 30px;
    color: cadetblue;
    margin-right: 10px;
`;

