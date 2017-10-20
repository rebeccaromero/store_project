import { combineReducers } from 'redux';
import AdminsReducer from './reducer_admins.js';
import ProductsReducer from './reducer_products.js';
import CartReducer from './reducer_cart.js';
import UsersReducer from './reducer_users.js';
import UserReducer from './reducer_user.js';
import ShopReducer from './reducer_shop.js';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  admins: AdminsReducer,
  products: ProductsReducer,
  cart: CartReducer,
  cartQuantity: CartReducer,
  users: UsersReducer,
  user: UserReducer,
  email: ShopReducer,
  status: ShopReducer,
  form: formReducer
});

export default rootReducer;
