import { Box } from '@mui/material';

import Header from './Header';
import ImageGallery from './ImageGallery';


function App(): JSX.Element {
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
