import React, { Component } from 'react';
import { Login } from '../containers/login.js';
import CartHeader from '../components/cartHeader.js';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import { statuses } from '../actions';

class UserSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        }
        this.validateLogin = this.validateLogin.bind(this);
    }

    validateLogin(email, password){
        axios.request({
        method: 'post',
        url: 'http://localhost:8000/login_user',
        data: {
            email: email,
            password: password
        },
        headers: { "X-CSRFToken": 'csrfToken' }
        })
            .then((errors) => {
                console.log(errors.data);
                if (errors.data === 'email') {
                    this.setState({ error: 'Email address is not found in database'})
                }
                if (errors.data === 'password') {
                    this.setState({ error: 'Please enter password'})
                }
                if (errors.data === 'password2') {
                    this.setState({ error: 'Invalid password, try reentering'})
                }
                if (errors.data === '') {
                    console.log('*********');
                    console.log(this.props);
                    this.props.loginUser(email);
                    console.log(email)
                    this.setState({error: ''})
                }
            })
    }

    render() {
        console.log('rendering usersection');
        console.log(this.props.status);
        if (this.props.status.status === 'LOGGED_IN' ) {
            console.log('User logged in');
            return (
                <div className="cart-header">
                    <CartHeader />
                </div>
            )
        }
        else {
            return (
                <div className="user-section">
                    <Login type={'user'} validateLogin={this.validateLogin} errors={this.state.error}/>
                    <Link to ='/shop/register' className="register-link">Register</Link>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return { 
        status: state.status, 
        user: ''
    };
  }
  
export default connect(mapStateToProps, {loginUser})(UserSection);
