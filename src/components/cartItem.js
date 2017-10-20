import React, {Component} from 'react';

export class CartItem extends Component {
    render(){
        return(
            <div>
                <p>IMAGE PLACEHOLDER</p>
                <p>{this.props.cartItem.product.fields.name}</p>
                <p>{this.props.cartItem.product.fields.price}</p>
            </div>
        )
    }
}