import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../actions'

class AdminUsers extends React.Component {
  componentDidMount() {
    this.props.fetchUsers()
      .then(() => {
        console.log(this.props.users);
      })
  }

  renderUsers() {
    return _.map(this.props.users, user => {
      return (
        <tr key={user.pk}>
          <td>{user.fields.first_name}</td>
          <td>{user.fields.last_name}</td>
          <td>{user.fields.email}</td>
          <td>{user.fields.phone_num}</td>
          <td>{user.fields.address}</td>
          <td>{user.fields.first_name}</td>
          <td>{user.fields.first_name}</td>
          <td>{user.fields.first_name}</td>
        </tr>
      )
    })
  }

  render() {
    return(
      <div>
        <h1>Users planeteers! Users be one too! 'Cause Users our planet is the thing to do!</h1>
        <Link to={'/admin/mission_control'}>
          Back
        </Link>
        <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Street Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
          </tr>
          {this.renderUsers()}
        </table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

export default connect(mapStateToProps, { fetchUsers })(AdminUsers);