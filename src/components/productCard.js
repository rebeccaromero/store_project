import React, {Component} from 'react';
import CartButton from './cartButton.js';

export class ProductCard extends Component {
    render() {
        return (
            <div className="product-card text-center">
                <h3>{this.props.product.fields.name}</h3>
                <p>{this.props.product.fields.image}</p>
                <p>${this.props.product.fields.price}</p>
                <CartButton product={this.props.product}/>
            </div>
        );
    }
}
  