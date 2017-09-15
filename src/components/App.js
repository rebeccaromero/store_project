import React, { Component } from 'react';
<<<<<<< HEAD
// import '../App.css';
import { Route } from 'react-router-dom';
import {WelcomePage} from './welcomePage.js';
import {AdminMain} from './adminMain.js';
import {ShopMain} from './shopMain.js';
=======
import '../App.css';
import { Route } from 'react-router-dom';
import { WelcomePage } from './welcomePage.js';
// import {AdminMain} from './adminMain.js';
import { ShopMain } from './shopMain.js';
>>>>>>> 5a9f3bc2fc347c2dcc9659c0e4fc5a6055db3f97

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
