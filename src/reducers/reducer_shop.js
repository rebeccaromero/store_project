import { LOGIN_USER, LOGOUT, statuses } from '../actions';
import _ from 'lodash';

export default function switchStatus(state = {status: statuses.LOGGED_OUT}, action) {
    switch (action.type) {
      case LOGIN_USER:
        console.log('LOGIN USER REDUCER')
        return _.assign(state, {
          status: action.status
        })
      case LOGOUT:
        console.log('LOGOUT USER REDUCER')
        return _.assign(state, {
          status: action.status
        })
      default:
        return state
    }
}