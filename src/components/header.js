import React, { Component } from 'react';
import { NavBar } from './navBar.js';
import UserSection from '../containers/userSection.js';

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1 className="store-name">Cool Cat Socks</h1>
                <NavBar />
                <UserSection />
            </div>
        );
    }
}