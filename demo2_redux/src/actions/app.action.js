import {APP_CHECKIN, APP_CHECKOUT} from '../constants';

// Called by Reducers
export const setStateCheckIn = (payload) => ({
  type: APP_CHECKIN,
  payload,
});

export const setStateCheckOut = () => ({
  type: APP_CHECKOUT,
});

// Called by UI
export const checkIn = (username) => {
  return (dispatch) => {
    // do something....
    setTimeout(() => {
      dispatch(setStateCheckIn(username));
    }, 1000);
  };
};
