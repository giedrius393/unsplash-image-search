import { Box } from '@mui/material';

import { Header, ImageGallery } from './modules';
import useLogin from './hooks/useLogin';


function App(): JSX.Element {
  useLogin();

  return (
    <>
      <Header />
      <Box sx={{ pt: 8 }}>
        <ImageGallery />
      </Box>
    </>
  );
}

export default App;
