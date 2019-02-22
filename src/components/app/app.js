import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
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
              path="/"
              component={ HomePage }
              exact/>
            <Route 
              path="/cart"
              component={ CartPage }
              />
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




