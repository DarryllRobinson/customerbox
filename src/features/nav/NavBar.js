import React from 'react';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  Switch,
} from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';

import HomeNavBar from './HomeNavBar';
import UserNavBar from './UserNavBar';
import avatar from '../../assets/images/Darryll passport.jpg';
import MaterialUISwitch from '../../components/MaterialUISwitch';

const pages = ['Products', 'Solutions', 'Pricing'];
const userPages = ['Dashboard', 'Reports'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

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
          <UserNavBar
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
                key={userPage}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {userPage}
              </Button>
            ))}
          </>
        );
      case false:
        return (
          <>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
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
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
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
            LOGO
          </Typography>

          {/* Box for menu items - smaller resolution */}
          {menuToDisplay()}

          {/* Smaller resolution */}
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          {/* Box for menu items - larger resolution */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {largerMenuItemsToDisplay()}
          </Box>

          {/* Box for user items */}
          <Box sx={{ flexGrow: 0 }}>
            User logger
            <Switch
              onChange={() => {
                setIsLoggedIn(!isLoggedIn);
              }}
            />
            <MaterialUISwitch checked={checked} onChange={onChange} />
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
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
