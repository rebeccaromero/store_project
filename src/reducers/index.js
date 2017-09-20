import { combineReducers } from 'redux';
import AdminsReducer from './reducer_admins.js';
import ProductsReducer from './reducer_products.js';
import UsersReducer from './reducer_users.js';
import ShopReducer from './reducer_shop.js';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  admins: AdminsReducer,
  products: ProductsReducer,
  users: UsersReducer,
  status: ShopReducer,
  form: formReducer
});

export default rootReducer;
