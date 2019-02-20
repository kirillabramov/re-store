import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../header/header'; 


import CartPage from '../pages/cart-page';
import HomePage from '../pages/home-page';

class App extends Component {

  render() {
    return (
      <Wrapper>
        <Header numItems={5} total={13}/>
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


export default App;


export const Wrapper = styled.div`
  max-width: 1040px;
  margin: 0 auto;
`;




