import { getLogInToken } from '../../utils/api';

import { Dispatch } from 'redux';
import { LOGIN, LOGOUT } from './actionTypes';

export const logIn = (code: string) => async (dispatch: Dispatch) => {
  const { data } = await getLogInToken(code);
  window.localStorage.setItem('token', data.access_token);
  dispatch(setToken(data.access_token));
};

export const setToken = (token: string) => ({ type: LOGIN, payload: token });

export const logOut = (dispatch: Dispatch) => {
  dispatch({ type: LOGOUT });
  window.localStorage.removeItem('token');
};
