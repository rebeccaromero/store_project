import React, {Component} from 'react';
import { Link } from 'react-router-dom'

export class WelcomePage extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to Cool Cat Socks!</h1>
                <p>Click here to shop</p>
                <Link to ='/shop'>Enter</Link>
            </div>
        );
    }
}