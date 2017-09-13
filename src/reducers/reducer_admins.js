import _ from 'lodash';
import { FETCH_ADMINS } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_ADMINS:
      console.log('FETCH ADMINS PAYLOAD: ' + action.payload);
      return _.mapKeys(action.payload.data, 'pk');
    default:
      return state;
  }
}