import React, { Component } from 'react';
import { Route, Switch, withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../header/header'; 
import { connect } from 'react-redux';

import CartPage from '../pages/cart-page';
import HomePage from '../pages/home-page';

class App extends Component {


  render() {
    const { cartItems, orderTotal } = this.props;
    let items = Object.keys(cartItems).reduce((prev, key) => prev + cartItems[key].count, 0); 
    return (
      <Wrapper>
        <Header numItems={items} total={orderTotal}/>
        <Switch>
            <Route 
              path="/re-store/"
              component={ HomePage }
              exact/>
            <Route 
              path="/cart/"
              component={ CartPage }
              />
            <Route render={() => {
                return(
                    <PageNotFound>
                        <PageNotFoundTitle>Page not found</PageNotFoundTitle>
                        <HomeButton to="/re-store/">Home</HomeButton>
                    </PageNotFound>
                )
                }} />
        </Switch>

      </Wrapper>
    );
  }
}

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal }}) => {
  return {
    cartItems,
    orderTotal
  };
};

export default withRouter(connect(mapStateToProps)(App));


export const Wrapper = styled.div`
  max-width: 1040px;
  margin: 0 auto;
`;

const PageNotFound = styled(Wrapper)`
  text-align: center
`;
const PageNotFoundTitle = styled.h2`
  color: #000;
  text-align: center;
`;

const HomeButton = styled(Link)`
  display: inline-block;
  padding: 5px;
  border: 1px solid lightgray;
  border-radius: 3px;
  color: #000;
  transition: .25s ease;
  &:hover{
    color: #000;
    text-decoration: none;
    transform: scale(.95);
    transition: .25s ease;
  }
  &:active{
    transform: scale(.90);
    transition: .25s ease;
  }
`;  






