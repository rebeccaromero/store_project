import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Header } from './header.js';
import { Footer } from './footer.js';
import { HomePage } from './homePage.js';
import { ProductsList } from './productsList.js';
import { CartPage } from './cartPage.js';
import { AboutPage } from './aboutPage.js';
import { AccountDetails } from './accountDetails.js';
import Register from '../containers/register.js';

export class ShopMain extends Component {
  render() {
    return (
      <div className="shopMain">
        <Header />
        <switch>
          <Route exact path="/shop" component={HomePage}></Route>
          <Route exact path="/shop/about" component={AboutPage}></Route>
          <Route exact path="/shop/products" component={ProductsList}></Route>
          <Route exact path="/shop/products/sale" component={ProductsList}></Route>
          <Route exact path="/shop/cart" component={CartPage}></Route>
          <Route exact path="/shop/register" component={Register}></Route>
          <Route exact path="/shop/account" component={AccountDetails}></Route>
        </switch>
        <Footer />
      </div>
    );
  }
}

