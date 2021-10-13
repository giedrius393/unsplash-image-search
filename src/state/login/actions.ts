import { getLogInToken } from '../../utils/api';

import { Dispatch } from 'redux';
import { LOGIN, LOGOUT, LOGIN_ERROR } from './actionTypes';

export const logIn = (code: string) => async (dispatch: Dispatch) => {
  try {
    const { data } = await getLogInToken(code);
    window.localStorage.setItem('token', data.access_token);
    dispatch({ type: LOGIN });
  } catch (error) {
    dispatch({ type: LOGIN_ERROR });
  }
};

export const checkLogInStatus = (dispatch: Dispatch) => {
  const token = window.localStorage.getItem('token');
  if (token?.length) dispatch(({ type: LOGIN }));
};

export const logOut = (dispatch: Dispatch) => {
  dispatch({ type: LOGOUT });
  window.localStorage.removeItem('token');
};
