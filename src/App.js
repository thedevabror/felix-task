import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './themes/theme';
import { CssBaseline } from '@mui/material';
import { Log, Panel, Sign } from './components';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Log />} />
          <Route path="/signin" element={<Sign />} />
          <Route path="/panel" element={<Panel />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App