import { Button, Toolbar, AppBar } from '@mui/material';

import SearchBar from '../components/SearchBar';

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
      sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
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
