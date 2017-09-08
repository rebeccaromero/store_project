import React, {Component} from 'react';
import {
    Route,
    Link
  } from 'react-router-dom';

export class HomePage extends Component {
    render() {
        return (
            <div className="main-body text-center">
                <p>Socks website info paragraph....</p>
                <div className="featured">
                    <h2>Featured Socks</h2>
                </div>
                <div className="new">
                    <h2>New Socks</h2>
                </div>
                <div className="inspiration">
                    <h2>Sock-sational Inspiration</h2>
                </div>
                <div className="shop-by">
                    <h2>Individual Pairs</h2>
                    <h2>Bundles of Socks</h2>
                </div>
            </div>
        );
    }
}
