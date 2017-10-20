import React, {Component} from 'react';
import { ProductCard } from './productCard.js'
import { ProductFilter } from '../containers/productFilter.js';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions';

class ProductsList extends Component {
    componentDidMount() {
        this.props.fetchProducts()
            .then(() => {
                console.log(this.props.products);
            })
    }

    renderProducts() {
        return _.map(this.props.products, product => {
          return (
            <ProductCard product={product} key={product.pk}/>
          )
        })
      }

    render() {
        return (
            <div className="main-body">
                <ProductFilter />
                {this.renderProducts()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { products: state.products }
  }
  
  export default connect(mapStateToProps, { fetchProducts })(ProductsList)