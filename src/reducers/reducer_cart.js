import { ADD_TO_CART } from '../actions';

export default function (state = {cart: [], cartQuantity: 0}, action) {
    switch (action.type) {
      case ADD_TO_CART:
        console.log('ADDING PRODUCT TO CART' + action.product);
        return Object.assign({}, state, {
            cart: [
              ...state.cart,
              {
                product: action.product
              }
            ],
            cartQuantity: state.cartQuantity +=1
          })
      default:
        return state;
    }
  }