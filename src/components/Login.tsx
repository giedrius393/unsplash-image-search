import { Button } from '@mui/material';

interface LoginProps {
  isLoggedIn: boolean,
  onLogin: () => void,
  onLogout: () => void,
}

function Login(props: LoginProps) {
  const { isLoggedIn, onLogin, onLogout } = props;

  if (!isLoggedIn) {
    return (
      <Button variant='contained' onClick={onLogin}>
        Log In
      </Button>
    );
  }
  return (
    <Button variant='contained' onClick={onLogout}>
      Log Out
    </Button>
  );
}

export default Login;
