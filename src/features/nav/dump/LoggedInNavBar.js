import * as React from 'react';
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

export default function LoggedInNavBar(props) {
  const {
    anchorElNav,
    handleCloseNavMenu,
    handleOpenNavMenu,
    userPages,
  } = props;

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
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
          display: { xs: 'block', md: 'none' },
        }}
      >
        {userPages.map((userPage) => (
          <MenuItem key={userPage.title} onClick={handleCloseNavMenu}>
            <Typography textAlign="center">{userPage.title}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
