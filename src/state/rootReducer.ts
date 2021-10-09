import { combineReducers } from 'redux';
import imagesReducer from './images/reducer';

export default combineReducers({
  images: imagesReducer,
});
