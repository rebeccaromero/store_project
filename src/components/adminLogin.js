import React from 'react';
import axios from 'axios';
import axiosDefaults from 'axios/lib/defaults';

import { Login } from '../containers/login';

axiosDefaults.xsrfCookieName = "csrftoken"
axiosDefaults.xsrfHeaderName = "X-CSRFToken"

export class AdminLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: "" }
    this.submitAdminData = this.submitAdminData.bind(this);
  }

  submitAdminData(email, password) {
    console.log('ADMIN LOGIN: ' + email + ', ' + password);
    var data = {
      email: email,
      password: password
    };
    axios.request({
      method: 'post',
      url: 'http://localhost:8000/admin/login',
      data: data,
      headers: { "X-CSRFToken": 'csrfToken' }
    })
      .then((errors) => {
        console.log('response: ' + errors);
        console.log(errors);
        console.log('error: ' + errors.data);
        if (errors.data === 'email') {
          this.setState({ error: "Email address not found in database"})
        }
        if (errors.data === 'password') {
          this.setState({ error: "Please enter password"})
        }
        if (errors.data === 'password2') {
          this.setState({ error: "Invalid password"})
        }
        if (errors.data === '') {
          this.props.history.push('/admin/mission_control');
        }
      });
  }

  render() {
    return (
      <div>
        <h1>Admin Login</h1>
        <Login type={"admin"} submitAdminData={this.submitAdminData} />
        <p>{this.state.error}</p>
      </div>
    )
  }
}