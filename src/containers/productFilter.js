import React, {Component} from 'react';

export class ProductFilter extends Component {
    render(){
        return (
            <div className="shop-by">
                <form>
                    <div>
                        <h4>Shop Products by Department:</h4>
                        <input type="radio" name="sock_category" value="womens" /> Womens
                        <input type="radio" name="sock_category" value="mens" /> Male
                        <input type="radio" name="sock_category" value="girls" /> Girls
                        <input type="radio" name="sock_category" value="boys" /> Boys
                    </div>
                    <div>
                        <h4>Shop Products by Styles:</h4>
                        <input type="radio" name="sock_style" value="no_show" /> No Show
                        <input type="radio" name="sock_style" value="ankle" /> Ankle 
                        <input type="radio" name="sock_style" value="crew" /> Crew
                        <input type="radio" name="sock_style" value="knee+" /> Knee-high and beyond
                    </div>
                    <div>
                        <h4>Shop Products by Price:</h4>
                        <input type="radio" name="sock_price" value="$2-" /> $2 and under
                        <input type="radio" name="sock_price" value="$-4.99" /> $2-$4.99
                        <input type="radio" name="sock_price" value="$5-9.99" /> $5-$9.99
                        <input type="radio" name="sock_price" value="$10+" /> $10+
                        <input type="radio" name="sock_price" value="sale" /> SALE
                    </div>
                    <div>
                        <h4>View:</h4>
                        <input type="radio" name="pairs" value="pairs" /> Pairs
                        <input type="radio" name="bundles" value="bundles" /> Bundles
                    </div>
                    <input type="submit" value="FILTER" />
                </form>
            </div>
        );
    }
}