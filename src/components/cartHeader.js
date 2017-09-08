import React, {Component} from 'react';
import {
    Route,
    Link
  } from 'react-router-dom';

export class CartHeader extends Component {
    render() {
        return (
            <div class="user-cart text-right">
                <p>logged in as: PLACEHOLDER USERNAME</p>
                <Link to ='/account'>Account Details</Link>  
                {/* <!--link account setting and add logic for cart and link to cart page!--> */}
                <div class="cart">
                    <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span><Link to ='/cart'>Cart: PLACEHOLDER ITEM TOTAL</Link> 
                </div>
                <button>Logout</button>
            </div>
        );
    }
}
