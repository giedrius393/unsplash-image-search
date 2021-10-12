import { Loader } from '../components';
import useLogin from '../hooks/useLogin';

function Login() {
  useLogin();

  return (
    <Loader fullscreen>
      Logging In
    </Loader>
  );
}

export default Login;
