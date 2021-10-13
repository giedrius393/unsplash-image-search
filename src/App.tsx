import { Box } from '@mui/material';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Header, ImageGallery, Login } from './modules';
import { checkLogInStatus } from './state/login/actions';
import { loadSearchOptions } from './state/images/actions';


function App(): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadSearchOptions);
    const token = window.localStorage.getItem('token');
    token?.length && dispatch(checkLogInStatus);
  }, []);

  return (
    <Router>
      <Route exact path='/login'>
        <Login />
      </Route>
      <Route exact path='/'>
        <Header />
        <Box sx={{ pt: 8 }}>
          <ImageGallery />
        </Box>
      </Route>
    </Router>
  );
}

export default App;
