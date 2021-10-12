import { AnyAction } from 'redux';
import { LOGIN, LOGOUT } from './actionTypes';


interface Login {
  isLoggedIn: boolean,
  token: string | null,
}

const initialState: Login = {
  isLoggedIn: false,
  token: null,
};

const loginReducer = (
  state = initialState,
  action: AnyAction,
): Login => {
  switch (action.type) {
    case LOGIN: {
      return {
        isLoggedIn: true,
        token: action.payload,
      };
    }
    case LOGOUT:
    default: {
      return state;
    }
  }
};

export default loginReducer;
