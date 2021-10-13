import { Box } from '@mui/material';
import { SxProps } from '@mui/system';
import ErrorIcon from '@mui/icons-material/Error';

interface ErrorProps {
  fullscreen?: boolean
}

function Error({ fullscreen }: ErrorProps) {
  const styles: Record<string, SxProps> = {
    errorBox: {
      display: 'flex',
      justifyContent: 'center',
      height: fullscreen ? '90vh' : '8vh',
      alignItems: 'center',
    },
    textBox: {
      pl: fullscreen ? 2 : 1,
      fontSize: fullscreen ? 25 : 15,
      fontFamily: '"Open Sans", sans-serif',
    },
    error: {
      width: fullscreen ? 80 : 40,
      height: fullscreen ? 80 : 40,
    },
  };

  return (
    <Box
      sx={styles.errorBox}
    >
      <ErrorIcon color='error' sx={styles.error}/>
      <Box sx={styles.textBox}>Oops! Something went wrong.</Box>
    </Box>
  );
}

export default Error;
