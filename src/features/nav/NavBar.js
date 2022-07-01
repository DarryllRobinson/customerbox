import React from 'react';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  Switch,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import HomeNavBar from './HomeNavBar';
import LoggedInNavBar from './LoggedInNavBar';
import logo from '../../assets/images/CustomerBox logo.png';
import avatar from '../../assets/images/Darryll passport.jpg';
import MaterialUISwitch from '../../components/MaterialUISwitch';

const pages = [
  { title: 'Products', link: '#' },
  { title: 'Solutions', link: '#' },
  { title: 'Pricing', link: '/pricing' },
];

const userPages = [
  { title: 'Dashboard', link: '#' },
  { title: 'Reports', link: '#' },
];

const settings = [
  { title: 'Profile', link: '#' },
  { title: 'Account', link: '#' },
  { title: 'Dashboard', link: '#' },
  { title: 'Logout', link: '#' },
];

export default function NavBar(props) {
  const { checked, onChange } = props;
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const menuToDisplay = () => {
    switch (isLoggedIn) {
      case true:
        return (
          <LoggedInNavBar
            checked={checked}
            handleOpenNavMenu={handleOpenNavMenu}
            anchorElNav={anchorElNav}
            handleCloseNavMenu={handleCloseNavMenu}
            userPages={userPages}
          />
        );
      case false:
        return (
          <HomeNavBar
            checked={checked}
            handleOpenNavMenu={handleOpenNavMenu}
            anchorElNav={anchorElNav}
            handleCloseNavMenu={handleCloseNavMenu}
            pages={pages}
          />
        );
      default:
        return <div>Problem with NavBar selection</div>;
    }
  };

  const largerMenuItemsToDisplay = () => {
    switch (isLoggedIn) {
      case true:
        return (
          <>
            {userPages.map((userPage) => (
              <Button
                key={userPage.title}
                component={RouterLink}
                //onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                to={userPage.link}
              >
                {userPage.title}
              </Button>
            ))}
          </>
        );
      case false:
        return (
          <>
            {pages.map((page) => (
              <Button
                key={page.title}
                component={RouterLink}
                //onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                to={page.link}
              >
                {page.title}
              </Button>
            ))}
          </>
        );
      default:
        return <div>Problem with NavBar selection</div>;
    }
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Larger resolution */}
          <Card sx={{ maxWidth: 345, ml: -4, mr: 2 }}>
            <CardMedia
              sx={{ display: { xs: 'none', md: 'flex' } }}
              component="img"
              height="40"
              image={logo}
              alt="logo"
            />
          </Card>
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CustomerBox
          </Typography>
          {/* Box for menu items - smaller resolution */}
          {menuToDisplay()}
          {/* Smaller resolution */}
          <Typography
            variant="h5"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CustomerBox
          </Typography>
          {/* Box for menu items - larger resolution */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {largerMenuItemsToDisplay()}
          </Box>
          {/* Box for user items */}
          <Switch
            onChange={() => {
              setIsLoggedIn(!isLoggedIn);
            }}
            sx={{ display: { xs: 'none', md: 'flex' } }}
          />
          <MaterialUISwitch
            checked={checked}
            onChange={onChange}
            sx={{ display: { xs: 'none', md: 'flex' } }}
          />
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="user avatar" src={avatar} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.title} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting.title}</Typography>
                </MenuItem>
              ))}
              <Switch
                onChange={() => {
                  setIsLoggedIn(!isLoggedIn);
                }}
                sx={{ display: { xs: 'flex', md: 'none' } }}
              />
              <MaterialUISwitch
                checked={checked}
                onChange={onChange}
                sx={{ display: { xs: 'flex', md: 'none' } }}
              />
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
