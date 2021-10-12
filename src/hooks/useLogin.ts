import { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '../state/hooks';
import { logIn } from '../state/login/actions';

function useLogin() {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn);

  useEffect(() => {
    if (location.search) {
      const searchParams = new URLSearchParams(location.search);
      const code = searchParams.get('code');
      if (code?.length && !isLoggedIn) {
        dispatch(logIn(code));
      }
    }
  }, [location]);

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/');
    }
  }, [isLoggedIn]);
}

export default useLogin;
