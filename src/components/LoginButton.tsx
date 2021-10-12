import { Button } from '@mui/material';
import { LOGIN_URL } from '../utils/constants';

interface LoginProps {
  isLoggedIn: boolean,
  onLogOut: () => void,
}

function LoginButton(props: LoginProps) {
  const redirectToLoginPage = () => {
    window.location.href = LOGIN_URL;
  };

  const { isLoggedIn, onLogOut } = props;

  if (!isLoggedIn) {
    return (
      <Button variant='contained' onClick={redirectToLoginPage}>
        Log In
      </Button>
    );
  }
  return (
    <Button variant='contained' onClick={onLogOut}>
      Log Out
    </Button>
  );
}

export default LoginButton;
