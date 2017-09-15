import _ from 'lodash';
import { FETCH_PRODUCTS } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      console.log('FETCH PRODUCTS PAYLOAD: ' + action.payload);
      return _.mapKeys(action.payload.data, 'pk');
    default:
      return state;
  }
}