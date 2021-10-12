import { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

function useLogin() {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (location.search) {
      console.log(location.search);
      history.push('/');
    }
  }, [location]);
}

export default useLogin;
