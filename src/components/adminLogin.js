import React from 'react';

import { Login } from '../containers/login';

export class AdminLogin extends React.Component {
  render() {
    return (
      <div>
        <h1>Admin Login</h1>
        <Login />
      </div>
    )
  }
}