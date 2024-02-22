import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Mulish',
      'sans-serif',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#6200EE',
    },
    secondary: {
      main: '#f50057',
    },
    success: {
      main: '#6200EE',
      contrastText: '#ffffff',
    }
  },
});

export default theme;