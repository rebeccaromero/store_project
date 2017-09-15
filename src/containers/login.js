import React, {Component} from 'react';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: "",
            password: ""
        };
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('Form Type: ' + e.target.type.value);
        var email = e.target.email.value;
        var password = e.target.password.value;
        this.setState({
            email: "",
            password: ""
        });
        this.props.submitAdminData(email, password);
    }

    handleEmail(e) {
        this.setState({ email: e.target.value });
    }
    
    handlePassword(e) {
        this.setState({ password: e.target.value });
    }

    render() {
        return (
<<<<<<< HEAD
            <div className="login">
                <form className="form-inline">
=======
            <div>
                <form className="form-inline" onSubmit={this.handleSubmit}>
                    <input type="hidden" name="type" value={this.props.type} />
>>>>>>> 1d7467d5420acf8b0178ccac4f60059e3350a392
                    <div className="form-group">
                        <label htmlFor="">Email:</label>
                        <input className="form-control" type="text" name='email' value={this.state.email} onChange={this.handleEmail}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password:</label>
                        <input className="form-control" type="password" name='password' value={this.state.password} onChange={this.handlePassword}/>
                    </div>
                    <div className="login-submit">
                        <input type="submit" value='Login' />
                    </div>
                </form>
            </div>
        );
    }
}