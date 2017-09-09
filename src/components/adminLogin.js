import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom';

import { Login } from '../containers/login';

export class AdminLogin extends React.Component {
  render() {
    return (
      <div>
        <switch>
          <Route exact path="/admin" component={ Login } />
        </switch>
      </div>
    )
  }
}