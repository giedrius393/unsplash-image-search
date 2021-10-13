import { Box, CircularProgress } from '@mui/material';
import { SxProps } from '@mui/system';

interface LoaderProps {
  fullscreen?: boolean
  children?: JSX.Element | string
}

function Loader({ fullscreen, children }: LoaderProps) {
  const styles: Record<string, SxProps> = {
    loaderBox: {
      display: 'flex',
      justifyContent: 'center',
      height: fullscreen ? '90vh' : '8vh',
      alignItems: 'center',
      flexDirection: 'column',
    },
    childrenBox: {
      pt: 3,
      fontFamily: '"Open Sans", sans-serif',
    },
  };

  return (
    <Box
      sx={styles.loaderBox}
    >
      <CircularProgress />
      {children && (
        <Box sx={styles.childrenBox}>
          {children}
        </Box>
      )}
    </Box>
  );
}

export default Loader;
