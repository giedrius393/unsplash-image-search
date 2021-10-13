import { AnyAction } from 'redux';
import { LOGIN, LOGOUT, LOGIN_ERROR } from './actionTypes';


interface Login {
  isLoggedIn: boolean,
  hasError: boolean,
}

const initialState: Login = {
  isLoggedIn: false,
  hasError: false,
};

const loginReducer = (
  state = initialState,
  action: AnyAction,
): Login => {
  switch (action.type) {
    case LOGIN: {
      return {
        isLoggedIn: true,
        hasError: false,
      };
    }
    case LOGOUT: {
      return initialState;
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        hasError: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default loginReducer;
