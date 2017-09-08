import React, { Component } from 'react';
// import '../App.css';
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

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/about" component={AboutPage}></Route>
          <Route exact path="/products" component={ProductsList}></Route>
          <Route exact path="/products/sale" component={ProductsList}></Route>
          <Route exact path="/cart" component={CartPage}></Route>
        </switch>
        <Footer />
      </div>
    );
  }
}

export default App;
