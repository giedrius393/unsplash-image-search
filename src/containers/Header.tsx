import { Button, Toolbar } from '@mui/material';

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
    <Toolbar sx={{ justifyContent: 'space-between' }}>
      <SearchBar
        onSearchSubmit={onSearchSubmit}
        searchOptions={searchOptions}
      />
      <Button
        onClick={onLogin}
        variant='outlined'
      >
        Log In
      </Button>
    </Toolbar>
  );
}

export default Header;
