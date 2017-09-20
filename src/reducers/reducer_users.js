import _ from 'lodash';
import { FETCH_USERS, FETCH_USER } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_USERS:
      return _.mapKeys(action.payload.data, 'pk');
    case FETCH_USER:
      return action.payload.data;
    default:
      return state;
  }
}