import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Mulish',
      'sans-serif',
    ].join(','),
  },
  palette: {
    primary: {
      main: 'rgb(51, 51, 51)',
    //   black: 'rgb(51, 51, 51)',
    },
    secondary: {
      main: '#f50057',
    },
    success: {
        main: '#6200EE',         // custom button color (seafoam green)
      contrastText: '#ffffff',
    }
  },
});

export default theme;