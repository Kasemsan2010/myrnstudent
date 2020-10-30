import {JSON_FEED_FAILED, JSON_FEED_FETCHING, JSON_FEED_SUCCESS} from '../constants';

const initialState = {
  dataArray: [],
  isFetching: false,
  isError: false,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case JSON_FEED_FETCHING:
      return {...state, dataArray: [], isFetching: true, isError: false};
    case JSON_FEED_SUCCESS:
      return {...state, dataArray: payload, isFetching: false, isError: false};
    case JSON_FEED_FAILED:
      return {...state, dataArray: [], isFetching: false, isError: true};
    default:
      return state;
  }
};
