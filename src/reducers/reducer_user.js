import { FETCH_USER } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
      case FETCH_USER:
        console.log('REACHED REDUCER');
        return action.payload.data[0].fields;
      default:
        return state;
    }
  }