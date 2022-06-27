import React from 'react';
import { Navigate, Route, Router, Routes, useLocation } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Home from './components/Home';
import Copyright from './components/Copyright';
import Dashboard from './components/Dashboard';

// User pages
import SignIn from './features/users/SignIn';
import SignUp from './features/users/SignUp';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  let { pathname } = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          border: '1px solid black',
          display: 'flex',
          flexDirection: 'column',
          m: '-8px',
          minHeight: '100vh',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Routes>
          <Route
            path="/:url*(/+)"
            element={<Navigate to={pathname.slice(0, -1)} replace />}
          />
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
        <Box
          component="footer"
          sx={{
            py: 1,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[300]
                : theme.palette.grey[900],
          }}
        >
          <Container maxWidth="sm">
            <Copyright sx={{ pt: 2 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export { App };
