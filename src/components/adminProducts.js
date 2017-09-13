import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../actions';

class AdminProducts extends React.Component {
  componentDidMount() {
    this.props.fetchProducts()
      .then(() => {
        console.log(this.props.products);
      })
  }

  renderProducts() {
    return _.map(this.props.products, product => {
      return (
        <tr key={product.pk}>
          <td>{product.fields.name}</td>
          <td>{product.fields.image}</td>
          <td>{product.fields.sizes}</td>
          <td>{product.fields.dept}</td>
          <td>{product.fields.style}</td>
          <td>{product.fields.design}</td>
          <td>{product.fields.material}</td>
          <td>{product.fields.price}</td>
          <td>{product.fields.cost}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div>
        <Link to={'/admin/mission_control'}>
          Back
        </Link>
        <h1>Hop on your pogo stick</h1>
        <table>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Sizes</th>
            <th>Dept.</th>
            <th>Style</th>
            <th>Design</th>
            <th>Material</th>
            <th>Price</th>
            <th>Cost</th>
          </tr>
          {this.renderProducts()}
        </table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { products: state.products }
}

export default connect(mapStateToProps, { fetchProducts })(AdminProducts)