import React from 'react';
import { Navigate, Route, Router, Routes, useLocation } from 'react-router-dom';
import { Box, Container, CssBaseline, styled, Switch } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Home from './components/Home';
import Copyright from './components/Copyright';
import Dashboard from './components/Dashboard';
import NavBar from './features/nav/NavBar';

// User pages
import SignIn from './features/users/SignIn';
import SignUp from './features/users/SignUp';

// Define theme settings
const light = { palette: { mode: 'light' } };
const dark = { palette: { mode: 'dark' } };

function App() {
  let { pathname } = useLocation();

  // Theme state set up
  // Light theme is default theme
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  // Getting device scheme settings to use as default for App
  React.useEffect(() => {
    // Update the default theme with device setting
    setIsDarkTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, []);

  React.useEffect(() => {
    // Check to see if it changes at any point
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        setIsDarkTheme(
          window.matchMedia('(prefers-color-scheme: dark)').matches
        );
      });
  }, [isDarkTheme]);

  // Toggling theme
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <CssBaseline />
      <Box
        sx={{
          //border: '1px solid black',
          display: 'flex',
          flexDirection: 'column',
          m: '-8px',
          p: '8px',
          minHeight: '100vh',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Box sx={{ alignItems: 'center', border: '1px solid black' }}>
          <NavBar checked={isDarkTheme} onChange={changeTheme} />
        </Box>
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
