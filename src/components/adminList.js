import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';

class AdminList extends Component {
  componentDidMount() {
    console.log('Butter');
    this.props.fetchAdmins()
      .then(() => {
        console.log('this.props.admins:');
        console.log(this.props.admins);
      })
  }

  renderAdmins() {
    return _.map(this.props.admins, admin => {
      return (
        <tr key={admin.pk}>
          <td>{admin.fields.first_name}</td>
          <td>{admin.fields.last_name}</td>
          <td>{admin.fields.email}</td>
          <td>{admin.fields.created_at}</td>
          <td>{admin.fields.updated_at}</td>
        </tr>
      )
    })
  }

  render() {

    return (
      <div>
        <p>This will be a list of admins</p>
        <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
          {this.renderAdmins()}
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { admins: state.admins };
}

export default connect(mapStateToProps, { fetchAdmins })(AdminList);