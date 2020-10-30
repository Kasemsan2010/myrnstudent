import {APP_CHECKIN, APP_CHECKOUT} from '../constants';

const initialState = {
  username: null,
  timestamp: null,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case APP_CHECKIN:
      return {...state, username: payload, timestamp: Date.now()};
    case APP_CHECKOUT:
      return {...state, username: null, timestamp: null};

    default:
      return state;
  }
};
