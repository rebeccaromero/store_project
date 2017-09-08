import React, {Component} from 'react';
import {
  Route,
  Link
} from 'react-router-dom'

export class NavBar extends Component {
    render() {
        return (
            <div>
                <Link to ='/'>HOME</Link>
                <Link to ='/about'>About Us</Link>
                <Link to ='/products'>Products</Link>
                <Link to ='/products/sale'>Sale</Link>
                <Link to ='/contact'>Contact Us</Link>
            </div>
        );
    }
}