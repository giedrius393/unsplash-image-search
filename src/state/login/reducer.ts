import { AnyAction } from 'redux';
import { LOGIN, LOGOUT } from './actionTypes';


interface Login { isLoggedIn: boolean }

const initialState: Login = { isLoggedIn: false };

const loginReducer = (
  state = initialState,
  action: AnyAction,
): Login => {
  switch (action.type) {
    case LOGIN: {
      return { isLoggedIn: true };
    }
    case LOGOUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default loginReducer;
