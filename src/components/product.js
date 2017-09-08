import React, {Component} from 'react';
import {
    Route,
    Link
  } from 'react-router-dom';

export class Product extends Component {
    render() {
        return (
            <div className="main-body text-center">
                <div className="product-box">
                    <h3>PLACEHOLDER: NAME</h3>
                    <img src="" alt="" />
                    <div className="product-info">
                        <p>PLACEHOLDER PRODUCT INFO</p>
                    </div>
                    <form action="{% url 'add_to_cart' %}" method="POST">
                        <input type="hidden" name="id" value="{{product.id}}" />
                        <div className="input-group">
                            <span className="input-group-btn">
                                <button type="button" className="quantity-left-minus btn btn-xs btn-number"  data-type="minus">
                                <span className="glyphicon glyphicon-minus"></span>
                                </button>
                            </span>
                            <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" min="1" max="25" />
                            <span className="input-group-btn">
                                <button type="button" className="quantity-right-plus btn btn-xs btn-number" data-type="plus">
                                <span className="glyphicon glyphicon-plus"></span>
                                </button>
                            </span>
                        </div>
                        <input type="submit" value="Add to Cart" />
                    </form>
                </div>
            </div>
        );
    }
}
