import React, {Component} from 'react';
import {
  Route,
  Link
} from 'react-router-dom';

export class Login extends Component {
    render() {
        return (
            <div>
                <form className="form-inline" action="{% url 'login_submit' %}" method='post'>
                    <div className="form-group">
                        <label htmlFor="">Email:</label>
                        <input className="form-control" type="text" name='email' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password:</label>
                        <input className="form-control" type="password" name='password' />
                    </div>
                    <div className="login-submit">
                        <input type="submit" value='Login' />
                    </div>
                </form>
            </div>
        );
    }
}