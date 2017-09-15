import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export class CartHeader extends Component {
    render() {
        return (
            <div className="user-cart text-right">
                <p>logged in as: PLACEHOLDER USERNAME</p>
                <Link to ='/shop/account'>Account Details</Link>  
                {/* <!--link account setting and add logic for cart and link to cart page!--> */}
                <div className="cart">
                    <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span><Link to ='/shop/cart'>Cart: PLACEHOLDER ITEM TOTAL</Link> 
                </div>
                <button>Logout</button>
            </div>
        );
    }
}
