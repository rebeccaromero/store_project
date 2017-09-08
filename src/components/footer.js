import React, {Component} from 'react';
import {
    Route,
    Link
  } from 'react-router-dom';

export class Footer extends Component {
    render() {
        return (
            <div class="footer">
                <h3>Cool Cat Socks</h3>
                <div>
                    <h4>Contact Us</h4>
                    <p>PlaceHolder fo contact Info*</p>
                </div>
                <div class="subscribe">
                    <p>Subscribe to stay updated on new product, sales, and more!</p>
                    <form>
                        <input type="text" name="email" value="Enter email here" />
                        <input type="submit" value="Subscribe" />
                    </form>
                </div>
            </div>
        );
    }
}
