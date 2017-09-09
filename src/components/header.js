import React, { Component } from 'react';
import { NavBar } from './navBar.js';
import { Login } from '../containers/login.js';
import { CartHeader } from './cartHeader.js';
import {
    Route,
    Link
  } from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <div>
                <h1>Cool Cat Socks</h1>
                <NavBar />
                <Login />
                <Link to ='/register'>Register</Link>
                <CartHeader />
            </div>
        );
    }
}