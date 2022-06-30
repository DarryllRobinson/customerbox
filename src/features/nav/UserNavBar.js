import * as React from 'react';
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

export default function UserNavBar(props) {
  const {
    anchorElNav,
    handleCloseNavMenu,
    handleOpenNavMenu,
    userPages,
  } = props;

  //const NavLink = styled(Link)(({ theme }) => ({}));

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
          <MenuItem key={userPage} onClick={handleCloseNavMenu}>
            <Typography textAlign="center">{userPage}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
