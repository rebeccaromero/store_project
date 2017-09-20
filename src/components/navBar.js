import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export class NavBar extends Component {
    render() {
        return (
            <div className="nav-bar">
                <Link to ='/shop'> HOME </Link>
                <Link to ='/shop/about'> About Us </Link>
                <Link to ='/shop/products'> Products </Link>
                <Link to ='/shop/products/sale'> Sale </Link>
            </div>
            );
        }
    }
