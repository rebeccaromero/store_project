import { combineReducers } from 'redux';
import AdminsReducer from './reducer_admins.js';
import ProductsReducer from './reducer_products.js';
import UsersReducer from './reducer_users.js';

const rootReducer = combineReducers({
  admins: AdminsReducer,
  products: ProductsReducer,
  users: UsersReducer
});

export default rootReducer;
