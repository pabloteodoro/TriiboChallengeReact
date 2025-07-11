import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Header from './components/header/Header';
import { Box } from '@mui/material';

const App = () => {
  return (
    <BrowserRouter>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Header />
        <Box component="main" flexGrow={1}>
          <AppRoutes />
        </Box>
        
      </Box>
    </BrowserRouter>
  );
};

export default App;
