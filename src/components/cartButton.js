import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions';

class CartButton extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log('MEOWWTTHHHHHHHH');
        console.log(this.props.product)
        this.props.addToCart(this.props.product)
    }
    
    render() {
        console.log(this.props.cart)
        return(
            <div>
                <button onClick={this.handleClick}>Add to CartButton</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { 
        email: state.email,
        status: state.status,
        user: state.user,
        cart: state.cart
    };
}
  
export default connect(mapStateToProps, { addToCart })(CartButton);