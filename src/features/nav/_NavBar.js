import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Stack,
  Switch,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { history } from '../../helpers';
//import HomeNavBar from './HomeNavBar';
//import LoggedInNavBar from './LoggedInNavBar';
import Logo from './Logo';
import MenuChoices from './MenuChoices';
import UserMenu from './UserMenu';
//import avatar from '../../assets/images/Darryll passport.jpg';
import MaterialUISwitch from '../../components/MaterialUISwitch';

// Constants for menu items
/*const pages = [
  { title: 'Products', link: '#' },
  { title: 'Solutions', link: '#' },
  { title: 'Pricing', link: '/pricing' },
];

const userPages = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Reports', link: '#' },
];

const settings = [
  { title: 'Profile', link: '#' },
  { title: 'Account', link: '#' },
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Logout', link: '#' },
];*/

export default function NavBar(props) {
  // NavBar theme properties from App component
  const { checked, onChange } = props;
  //console.log({ props });

  // State hooks
  /*const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);*/
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Calculate screen size for navbar
  /*const theme = useTheme();
  const bigger = useMediaQuery(theme.breakpoints.up('sm'));
  const [biggerThanSM, setBiggerThanSM] = useState(bigger);
  console.log(biggerThanSM);*/

  // Checking or updating state hooks where required
  /*useEffect(() => {
    setIsLoggedIn(checked);
    console.log({ isLoggedIn });
  }, []);*/

  // NavBar handlers
  /*function handleOpenNavMenu(event) {
    setAnchorElNav(event.currentTarget);
  }

  function handleCloseNavMenu() {
    setAnchorElNav(null);
  }

  function handleOpenUserMenu(event) {
    setAnchorElUser(event.currentTarget);
  }

  function handleCloseUserMenu() {
    setAnchorElUser(null);
  }

  // Determing which navbar and menu items to display
  // from UserMenu component
  function menuDetermination() {
    return <UserMenu />;
  }*/

  // Determing whether to display the user menu
  // or the signin/up buttons
  function userOrSignIn() {
    if (isLoggedIn) return <UserMenu />;
    else
      return (
        <>
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            {/* Larger than xs */}
            <Stack direction="row" spacing={2} sx={{ ml: 1 }}>
              <Button component={Link} href="/signin" variant="contained">
                Sign In
              </Button>
              <Button component={Link} href="/signup" variant="outlined">
                Sign Up
              </Button>
            </Stack>
          </Box>
          <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
            {/* Equal to xs */}
            <Stack direction="row" spacing={1} sx={{ ml: 1 }}>
              <Button
                component={Link}
                href="/signin"
                size="small"
                variant="contained"
              >
                Sign In
              </Button>
              <Button
                component={Link}
                href="/signup"
                size="small"
                variant="outlined"
              >
                Sign Up
              </Button>
            </Stack>
          </Box>
        </>
      );
  }

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Larger screen navbar */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <Logo />
            <MenuChoices />
            <Switch
              onChange={() => {
                setIsLoggedIn(!isLoggedIn);
              }}
            />
            <MaterialUISwitch checked={checked} onChange={onChange} />
            {userOrSignIn()}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
