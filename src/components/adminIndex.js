import React from 'react';
import { Link } from 'react-router-dom';

import AdminList from './adminList.js';

export class AdminIndex extends React.Component {
  render() {
    return (
      <div>
        <Link to={'/admin'}>
          Log Out
        </Link>
        <p>ADMIN INDEX</p>
        <Link className="manage-link" to={'/admin/products'}>
          Manage Products
        </Link>
        <Link className="manage-link" to={'/admin/users'}>
          Manage Users
        </Link>
        <AdminList />
      </div>
    )
  }
}