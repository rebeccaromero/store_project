import React from 'react';
import { Route } from 'react-router-dom';

import { AdminLogin } from './adminLogin.js';
import { AdminIndex } from './adminIndex.js';
import AdminProducts from './adminProducts.js';
import AdminUsers from './adminUsers.js';

export class AdminMain extends React.Component {
  render() {
    return (
      <div>
        <switch>
          <Route exact path="/admin" component={AdminLogin}></Route>
          <Route exact path="/admin/mission_control" component={AdminIndex}></Route>
          <Route exact path="/admin/products" component={AdminProducts}></Route>
          <Route exact path="/admin/users" component={AdminUsers}></Route>
        </switch>
      </div>
    );
  }
}