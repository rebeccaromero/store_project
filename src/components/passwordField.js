import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

export class PwField extends Component {
    render(field){
        const {meta: {touched, error} } = field;
        const className = `form-group ${ touched && error ? 'has-danger' : '' }`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    type="password"
                    className="form-control"
                    {...field.input}
                />
                <div className="text-help" style={{color: "red"}}>
                    {touched ? error : ''}
                </div>
            </div>
        );
    }
}