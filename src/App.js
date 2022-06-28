import React from 'react';
import { Navigate, Route, Router, Routes, useLocation } from 'react-router-dom';
import { Box, Container, CssBaseline, styled, Switch } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Home from './components/Home';
import Copyright from './components/Copyright';
import Dashboard from './components/Dashboard';

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
        const colorScheme = event.matches ? 'dark' : 'light';
        setIsDarkTheme(!isDarkTheme);
      });
  }, [isDarkTheme]);

  // Toggling theme
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  // Super fancy switch with icons from the MUI site
  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff'
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
      width: 32,
      height: 32,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff'
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },
  }));

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
        <MaterialUISwitch checked={isDarkTheme} onChange={changeTheme} />
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
