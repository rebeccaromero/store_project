import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser, logout } from '../actions';

class CartHeader extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        console.log('this.props.email: ' + this.props.email);
        console.log(this.props.email.email);
        this.props.fetchUser(this.props.email.email)
          .then(() => {
            console.log('********HOOT********')
            console.log(this.props.user);
          })
    }

    handleClick(){
        console.log('Attempting Logout');
        this.props.logout();
        console.log(this.props.status)
    }

    render() {
        return (
            <div className="user-cart text-right">
                <p>logged in as: {this.props.user.first_name}</p>
                <Link to ='/shop/account'>Account Details</Link>  
                {/* <!--link account setting and add logic for cart and link to cart page!--> */}
                <div className="cart">
                    <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span><Link to ='/shop/cart'>Cart: {this.props.cartQuantity} items</Link> 
                </div>
                <button onClick={this.handleClick}>Logout</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { 
        email: state.email,
        status: state.status,
        user: state.user,
        cartQuantity: state.cart.cartQuantity
    };
}
  
export default connect(mapStateToProps, { fetchUser,logout })(CartHeader);

