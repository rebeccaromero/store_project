import React, {Component} from 'react';

export class ProductCard extends Component {
    render() {
        console.log('HOOT HOOT HOOT')
        console.log(this.props.product)
        return (
            <div className="product-card text-center">
                <h3>{this.props.product.fields.name}</h3>
                <p>{this.props.product.fields.image}</p>
                <p>${this.props.product.fields.price}</p>
                <button>Add to Cart</button>
            </div>
        );
    }
}
  