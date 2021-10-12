import { combineReducers } from 'redux';
import imagesReducer from './images/reducer';
import loginReducer from './login/reducer';

export default combineReducers({
  images: imagesReducer,
  login: loginReducer,
});
