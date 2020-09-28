import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import words from './words';

export default combineReducers({
  alert,
  auth,
  words,
});
