import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Departures from './departures';
import Arrivals from './arrivals'; // Import the Arrivals component
import { Box } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Box
          sx={{
            height: '100vh',
            overflowY: 'hidden',
          }}
        >
          <Routes>
            <Route path="/departure" element={<Departures />} />
            <Route path="/arrival" element={<Arrivals />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
