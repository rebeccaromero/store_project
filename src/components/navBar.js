import React, {Component} from 'react';
import {
  Route,
  Link
} from 'react-router-dom'

export class NavBar extends Component {
    render() {
        return (
            <div>
                <Link to ='/shop'>HOME</Link>
                <Link to ='/shop/about'>About Us</Link>
                <Link to ='/shop/products'>Products</Link>
                <Link to ='/shop/products/sale'>Sale</Link>
                <Link to ='/shop/contact'>Contact Us</Link>
            </div>
        );
    }
}