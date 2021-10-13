import { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '../state/hooks';
import { logIn } from '../state/login/actions';
import { Loader } from '../components';

function Login() {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const { isLoggedIn, hasError } = useAppSelector((state) => state.login);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code');
    if (code?.length && !isLoggedIn) {
      dispatch(logIn(code));
    } else {
      history.push('/');
    }
  }, []);

  useEffect(() => {
    if (!location.search || isLoggedIn || hasError) {
      history.push('/');
    }
  }, [isLoggedIn, hasError]);

  return (
    <Loader fullscreen>
      Logging In
    </Loader>
  );
}

export default Login;
