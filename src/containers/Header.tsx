import { Button, Toolbar, AppBar } from '@mui/material';
import { SxProps } from '@mui/system';

import SearchBar from '../components/SearchBar';

const styles: Record<string, SxProps> = {
  appBar: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  toolbar: {
    justifyContent: 'space-between',
  },
};

function Header(): JSX.Element {
  const searchOptions: string[] = [];
  const onSearchSubmit = (searchInput: string) => {
    searchOptions.unshift(searchInput);
    console.log(searchInput);
  };

  const onLogin = () => {
    console.log('log in');
  };

  return (
    <AppBar
      position='fixed'
      sx={styles.appBar}
    >
      <Toolbar sx={styles.toolbar}>
        <SearchBar
          onSearchSubmit={onSearchSubmit}
          searchOptions={searchOptions}
        />
        <Button
          onClick={onLogin}
          variant='contained'
        >
          Log In
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
