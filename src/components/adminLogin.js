import React from 'react';
import axios from 'axios';
import axiosDefaults from 'axios/lib/defaults';

import { Login } from '../containers/login';

axiosDefaults.xsrfCookieName = "csrftoken"
axiosDefaults.xsrfHeaderName = "X-CSRFToken"

export class AdminLogin extends React.Component {
  constructor(props) {
    super(props);
    this.submitAdminData = this.submitAdminData.bind(this);
  }

  submitAdminData(email, password) {
    console.log('ADMIN LOGIN: ' + email + ', ' + password);
    axios.request({
      method: 'post',
      url: 'http://localhost:8000/admin/login',
      data: {
        email: email,
        password: password
      },
      headers: { "X-CSRFToken": 'csrfToken' }
    });
  }

  render() {
    return (
      <div>
        <h1>Admin Login</h1>
        <Login type={"admin"} submitAdminData={this.submitAdminData} />
      </div>
    )
  }
}