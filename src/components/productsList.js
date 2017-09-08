import React, {Component} from 'react';
import {
    Route,
    Link
  } from 'react-router-dom';
import {Product} from './product.js'
import { ProductFilter } from '../containers/productFilter.js';

export class ProductsList extends Component {
    render() {
        return (
            <div class="main-body text-center">
                <ProductFilter />
                <Product />
            </div>
        );
    }
}
