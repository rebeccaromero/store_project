import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {logout} from '../actions';
import {statuses} from '../actions';

export class CartHeader extends Component {
    constructor(props){
        super(props);
        this.state = {
            logged_in: true
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log('Attempting Logout');
        this.props.logout();
        this.setState({
            logged_in: false
        })
    }

    render() {
        return (
            <div className="user-cart text-right">
                <p>logged in as: PLACEHOLDER USERNAME</p>
                <Link to ='/shop/account'>Account Details</Link>  
                {/* <!--link account setting and add logic for cart and link to cart page!--> */}
                <div className="cart">
                    <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span><Link to ='/shop/cart'>Cart: PLACEHOLDER ITEM TOTAL</Link> 
                </div>
                <button onClick={this.handleClick}>Logout</button>
            </div>
        );
    }
}
