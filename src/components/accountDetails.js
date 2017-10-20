import React, {Component} from 'react';
import { connect } from 'react-redux';

class AccountDetails extends Component {
    render() {
        return (
            <div>
                <h1 className="text-center">User Account Details</h1>
                <p>{this.props.user.first_name} {this.props.user.last_name}</p>
                <p>{this.props.user.email}</p>
                <p>{this.props.user.address}</p>
                <p>{this.props.user.phone_num}</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { 
        user: state.user
    };
}
  
export default connect(mapStateToProps, {})(AccountDetails);
