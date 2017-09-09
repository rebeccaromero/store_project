import React, {Component} from 'react';

export class Register extends Component {
    render(){
        return (
            <div>
                <div class="text-center">
                    <h1>Registration</h1>
                </div>
                <form class="form-horizontal" action="{% url 'submit_reg' %}" method='post'>
                    <h3>User Information</h3>
                    <div class="form-group">
                        <label class="col-sm-2 control-label" for="">First Name:</label>
                        <div class="col-sm-10">
                            <input class="form-control" type="text" name='first_name' />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label" for="">Last Name:</label>
                        <div class="col-sm-10">
                            <input class="form-control" type="text" name='last_name' />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label" for="">Email:</label>
                        <div class="col-sm-10">
                            <input class="form-control" type="text" name='email' />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label" for="">Phone Number:</label>
                        <div class="col-sm-10">
                            <input class="form-control" type="text" name='phone_num' />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label" for="">Password:</label>
                        <div class="col-sm-10">
                            <input class="form-control" type="password" name='password' />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label" for="">Confirm PW:</label>
                        <div class="col-sm-10">
                            <input class="form-control" type="password" name='confirm_pw' />
                        </div>
                    </div>
                    <h3>Shipping Information</h3>
                    <p>(Unfortunately, we are still only shipping to the US for now. Subscribe to be informed of when we start international shipping!)</p>
                    <div class="form-group">
                        <label class="col-sm-2 control-label" for="">Name:</label>
                        <div class="col-sm-10">
                            <input class="form-control" type="text" name='name' />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label" for="">Street Address:</label>
                        <div class="col-sm-10">
                            <input class="form-control" type="text" name='street' />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label" for="">Street Address 2/Apt:</label>
                        <div class="col-sm-10">
                            <input class="form-control" type="text" name='street2' />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label" for="">City:</label>
                        <div class="col-sm-10">
                            <input class="form-control" type="text" name='city' />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label" for="">State:</label>
                        <div class="col-sm-10">
                            <select class="form-control" name="state">
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
                    <div class="form-group">
                        <label class="col-sm-2 control-label" for="">Zip Code:</label>
                        <div class="col-sm-10">
                            <input class="form-control" type="text" name='zip_code' />
                        </div>
                    </div>
                    <div class="form-group register-submit">
                        <div class="col-sm-offset-2 col-sm-10">
                            <button type="submit" class="btn btn-default">REGISTER</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}