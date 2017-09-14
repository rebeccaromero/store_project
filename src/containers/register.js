import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
// import {PwField} from '../components/passwordField.js';
import {TextField} from '../components/textField.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';
// import { createPost } from '../actions';

class Register extends Component {
    renderField(field) {
        const {meta: {touched, error} } = field;
        const className = `form-group ${ touched && error ? 'has-danger' : '' }`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    type="text"
                    className="form-control"
                    {...field.input}
                />
                <div className="text-help" style={{color: "red"}}>
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        console.log(values);
        this.props.createUser(values, () => {
          this.props.history.push('/shop');
        });
      }
    
    render() {
        const { handleSubmit } = this.props;

        return (
            <div>
                <div className="text-center">
                    <h1>Registration</h1>
                </div>
                <div className="user-info">
                    <h3>User Information</h3>
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <Field
                            label="First Name: "
                            name="first_name"
                            component={this.renderField}
                        />
                        <Field
                            label="Last Name: "
                            name="last_name"
                            component={this.renderField}
                        />
                        <Field
                            label="Email: "
                            name="email"
                            component={this.renderField}
                        />
                        <Field
                            label="Phone Number: "
                            name="phone_num"
                            component={this.renderField}
                        />
                        <Field
                            label="Password: "
                            name="password"
                            component={this.renderField}
                        />
                        <Field
                            label="Password Confirmation: "
                            name="pw_confirmation"
                            component={this.renderField}
                        />
                        <h3>Shipping Information</h3>
                        <p>(Unfortunately, we are still only shipping to the US for now. Subscribe to be informed of when we start international shipping!)</p>
                        <Field
                            label="Name: "
                            name="ship_name"
                            component={this.renderField}
                        />
                        <Field
                            label="Street Address: "
                            name="address"
                            component={this.renderField}
                        />
                        <Field
                            label="Street Address 2: "
                            name="address2"
                            component={this.renderField}
                        />
                        <Field
                            label="City: "
                            name="city"
                            component={this.renderField}
                        />
                        <div className="form-group">
                            <label className="col-sm-2 control-label">State:</label>
                            <div className="col-sm-10">
                                <select className="form-control" name="state">
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="DC">District Of Columbia</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="IA">Iowa</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="ME">Maine</option>
                                    <option value="MD">Maryland</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MT">Montana</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NY">New York</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
                                </select>
                            </div>
                        </div>
                        <Field
                            label="Zip Code: "
                            name="zip_code"
                            component={this.renderField}
                        />
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>
                </div>
            </div>
        );
    }
}


function validate(values) {
const errors = {};
    
    if (!values.first_name) {
      errors.first_name = "Please enter a first name";
    }
    if (!values.last_name) {
      errors.last_name = "Please enter a last name";
    }
    if (!values.email) {
        errors.email = "Please enter an email";
    }
    if (values.email) {
        console.log('checking email')
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)) {
            console.log('bad email')
            errors.email = "Please enter a valid email";
        }
    }
    if (!values.phone_num) {
      errors.phone_num = "Please enter a phone number";
    }
    if (!values.password) {
      errors.password = "Please enter a password";
    }
    if (!values.pw_confirmation) {
      errors.pw_confirmation = "Please confirm your password";
    }
    if (!values.ship_name) {
      errors.ship_name = "Please enter name for shipping";
    }
    if (!values.address) {
      errors.address = "Please enter a street address";
    }
    if (!values.city) {
      errors.city = "Please enter a city";
    }
    if (!values.zip_code) {
      errors.zip_code = "Please enter a zip code";
    }
  
    return errors;
  }

export default reduxForm({
    validate,
    form: 'RegistersNewUser'
})(
    connect(null, {})(Register)
);