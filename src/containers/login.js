import React, {Component} from 'react';

export class Login extends Component {
    render() {
        return (
            <div className="login">
                <form className="form-inline">
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