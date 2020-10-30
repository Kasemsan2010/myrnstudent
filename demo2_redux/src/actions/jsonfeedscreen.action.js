import {
  JSON_FEED_FAILED,
  JSON_FEED_FETCHING,
  JSON_FEED_SUCCESS,
} from '../constants';

import axios from 'axios';

// Used by Reducers
export const setStateToFetching = () => ({
  type: JSON_FEED_FETCHING,
});

export const setStateToSuccess = (payload) => ({
  type: JSON_FEED_SUCCESS,
  payload,
});

export const setStateToFailed = () => ({
  type: JSON_FEED_FAILED,
});

export const loadDataWithPost = () => {
  return async (dispatch) => {
    try {
      // set fetching to allow progress bar to appear
      dispatch(setStateToFetching());

      let regUsername = 'admin'; // await AsyncStorage.getItem('username')
      let regPassword = 'password'; // await AsyncStorage.getItem('password')
      // urlencoded
      let data = `username=${regUsername}&password=${regPassword}&type=foods`;

      const url = 'http://codemobiles.com/adhoc/youtubes/index_new.php';
      let result = await axios.post(url, data);
      dispatch(setStateToSuccess(result.data.youtubes));
    } catch (error) {
      dispatch(setStateToFailed());
    }
  };
};
