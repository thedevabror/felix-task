import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './themes/theme';
import { SignUp } from './components'

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <SignUp />
    </ThemeProvider>
  );
}
