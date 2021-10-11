import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Box } from '@mui/material';

import Header from './Header';
import Login from './Login';
import ImageGallery from './ImageGallery';

import { getLoginUrl } from '../api/api';

function App(): JSX.Element {
  return (
    <Router>
      <Header />
      <Login />
      <Switch>
        <Route exact path='/'>
          <Box sx={{ pt: 8 }}>
            <ImageGallery />
          </Box>
        </Route>
        <Route exact path='/login' component={() => {
          window.location.href = getLoginUrl();
          return null;
        }}/>
      </Switch>
    </Router>
  );
}

export default App;
