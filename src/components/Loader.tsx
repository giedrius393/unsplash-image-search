import { Box, CircularProgress } from '@mui/material';

interface LoaderProps {
  fullscreen?: boolean
}

function Loader({ fullscreen }: LoaderProps): JSX.Element {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        height: fullscreen ? '90vh' : 'auto',
        alignItems: 'center',
      }}
    >
      <CircularProgress />
    </Box>
  );
}

export default Loader;
