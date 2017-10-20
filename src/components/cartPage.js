import React, {Component} from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { CartItem } from './cartItem.js';

class CartPage extends Component {
    renderCartItems() {
        console.log(this.props.cart);
        return _.map(this.props.cart, cartItem => {
          return (
            <CartItem cartItem={cartItem} key={cartItem.product.pk}/>
          )
        })
      }

    render() {
        return (
            <div className="main-body text-center">
                <h1>Your Cart</h1>
                {this.renderCartItems()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { 
        email: state.email,
        status: state.status,
        user: state.user,
        cart: state.cart.cart,
        cartQuantity: state.cart.cartQuantity
    };
}
  
export default connect(mapStateToProps, { })(CartPage);
