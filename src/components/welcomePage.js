import React, {Component} from 'react';
import { Link } from 'react-router-dom'

export class WelcomePage extends Component {
    render() {
        return (
            <div className="welcome-page text-center">
                <img src="https://i.pinimg.com/originals/69/69/d5/6969d55fa37ab5d94ef468db619ea7f6.jpg" alt="Cool Cat Socks" height="475" width="100%" />
                <h1>Welcome to Cool Cat Socks!</h1>
                <p>Click here to enter shop</p>
                <Link to ='/shop'>Enter</Link>
            </div>
        );
    }
}