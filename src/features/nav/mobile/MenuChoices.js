import React, { useState } from 'react';
import {
  IconButton,
  Link,
  Menu,
  MenuItem,
  Switch,
  Typography,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

import MaterialUISwitch from '../../../components/MaterialUISwitch';

// Constants for menu items
const pages = [
  { title: 'Home', link: '/' },
  { title: 'Products', link: '#' },
  { title: 'Solutions', link: '#' },
  { title: 'Pricing', link: '/pricing' },
];

export default function MenuChoices(props) {
  const { checked, isLoggedIn, onChange, setIsLoggedIn } = props;
  //console.log({ props });

  // State hooks
  const [anchorElNav, setAnchorElNav] = useState(null);

  // NavBar handlers
  function handleOpenNavMenu(event) {
    setAnchorElNav(event.currentTarget);
  }

  function handleCloseNavMenu() {
    setAnchorElNav(null);
  }

  return (
    <>
      <IconButton
        size="large"
        aria-label="menu choices"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
        edge="start"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block' },
        }}
      >
        {pages.map((page) => (
          <MenuItem key={page.title} component={Link} href={page.link}>
            <Typography textAlign="center">{page.title}</Typography>
          </MenuItem>
        ))}
        <MenuItem key="user-switch">
          <Switch
            checked={isLoggedIn}
            onChange={() => {
              setIsLoggedIn(!isLoggedIn);
            }}
            sx={{ display: 'flex' }}
          />
        </MenuItem>
        <MenuItem key="dark-switch">
          <MaterialUISwitch
            checked={checked}
            onChange={onChange}
            sx={{ display: 'flex' }}
          />
        </MenuItem>
      </Menu>
    </>
  );
}
