const {combineReducers} = require('redux');
import appReducer from './app.reducer';
import jsonfeedscreenReducer from './jsonfeedscreen.reducer';

export default combineReducers({appReducer, jsonfeedscreenReducer});
