import { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '../state/hooks';
import { logIn, setToken } from '../state/login/actions';

function useLogin() {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      const token = window.localStorage.getItem('token');
      token?.length && dispatch(setToken(token));
    }

    if (location.search) {
      const searchParams = new URLSearchParams(location.search);
      const code = searchParams.get('code');
      if (code?.length && !isLoggedIn) {
        dispatch(logIn(code));
      }
      history.push('/');
    }
  }, [location]);
}

export default useLogin;
