import { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

function Login(): null {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (location.search) {
      console.log(location.search);
      history.push('/');
    }
  }, [location]);

  return null;
}

export default Login;
