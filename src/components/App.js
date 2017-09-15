import React, { Component } from 'react';
// import '../App.css';
import { Route } from 'react-router-dom';
import {WelcomePage} from './welcomePage.js';
import {AdminMain} from './adminMain.js';
import {ShopMain} from './shopMain.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <switch>
          <Route path="/admin" component={AdminMain}></Route>
          <Route exact path="/" component={WelcomePage}></Route>
          <Route path="/shop" component={ShopMain}></Route>
        </switch>
      </div>
    );
  }
}

export default App;
