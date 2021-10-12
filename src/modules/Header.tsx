import { Button, Toolbar, AppBar } from '@mui/material';
import { SxProps } from '@mui/system';
import { useDispatch } from 'react-redux';

import { SearchBar } from '../components';
import { searchImages } from '../state/images/actions';
import { useAppSelector } from '../state/hooks';

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
        <Button variant='contained'>
          Log In
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
