import { Toolbar, AppBar } from '@mui/material';
import { SxProps } from '@mui/system';
import { useDispatch } from 'react-redux';

import { SearchBar, LoginButton } from '../components';
import { searchImages } from '../state/images/actions';
import { useAppSelector } from '../state/hooks';
import { logOut } from '../state/login/actions';

const styles: Record<string, SxProps> = {
  appBar: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  toolbar: {
    justifyContent: 'space-between',
  },
};

function Header(): JSX.Element {
  const dispatch = useDispatch();
  const searchOptions = useAppSelector((state) => state.images.searchOptions);
  const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn);

  return (
    <AppBar
      position='fixed'
      sx={styles.appBar}
    >
      <Toolbar sx={styles.toolbar}>
        <SearchBar
          onSearchSubmit={(input) => dispatch(searchImages(input))}
          searchOptions={searchOptions}
        />
        <LoginButton
          isLoggedIn={isLoggedIn}
          onLogOut={() => dispatch(logOut)}
        />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
