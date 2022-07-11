import React, { useState } from 'react';
import {
  Avatar,
  Box,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';

import avatar from '../../../assets/images/Darryll passport.jpg';

const choices = [
  { title: 'Profile', link: '#' },
  { title: 'Account', link: '#' },
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Logout', link: '#' },
];

export default function UserMenu() {
  // State hooks
  const [anchorElUser, setAnchorElUser] = useState(null);

  // Menu handlers
  function handleOpenUserMenu(event) {
    setAnchorElUser(event.currentTarget);
  }

  function handleCloseUserMenu() {
    setAnchorElUser(null);
  }

  return (
    <>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open choices">
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
          {choices.map((choice) => (
            <MenuItem
              key={choice.title}
              component={Link}
              onClick={handleCloseUserMenu}
              href={choice.link}
            >
              <Typography textAlign="center">{choice.title}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
}
