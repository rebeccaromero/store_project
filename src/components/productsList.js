import React, {Component} from 'react';
import {ProductCard} from './productCard.js'
import { ProductFilter } from '../containers/productFilter.js';

export class ProductsList extends Component {
    render() {
        return (
            <div class="main-body text-center">
                <ProductFilter />
                <ProductCard />
            </div>
        );
    }
}
