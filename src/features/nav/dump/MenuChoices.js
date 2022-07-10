import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

import banner from '../../assets/images/CustomerBox banner.png';

// Constants for menu items
const pages = [
  { title: 'Products', link: '#' },
  { title: 'Solutions', link: '#' },
  { title: 'Pricing', link: '/pricing' },
];

export default function MenuChoices() {
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
      {/* Box for menu items - larger resolution */}
      <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
        {pages.map((page) => (
          <Button
            key={page.title}
            component={Link}
            //onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'white', display: 'block' }}
            href={page.link}
          >
            {page.title}
          </Button>
        ))}
      </Box>

      {/* Box for menu items - xs resolution */}
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
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
            display: { xs: 'block', md: 'none' },
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page.title} component={Link} href={page.link}>
              <Typography textAlign="center">{page.title}</Typography>
            </MenuItem>
          ))}
        </Menu>
        {/* Banner display on xs screen - doesn't show nicely otherwise */}
        {/*<Typography
          variant="body2"
          noWrap
          component={Link}
          href="/"
          sx={{
            //mr: 2,
            //display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          CustomerBox
        </Typography>*/}
        <Card sx={{ maxWidth: 180, py: 2 }}>
          <CardMedia component="img" image={banner} alt="banner" />
        </Card>
      </Box>
    </>
  );
}
