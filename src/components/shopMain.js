import React, { Component } from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import {Header} from './header.js';
import {Footer} from './footer.js';
import {HomePage} from './homePage.js';
import {ProductsList} from './productsList.js';
import {CartPage} from './cartPage.js';
import {AboutPage} from './aboutPage.js';

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
        </switch>
        <Footer />
      </div>
    );
  }
}

