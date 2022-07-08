import React from 'react';
import { Card, CardMedia, Link, Typography } from '@mui/material';

import logo from '../../assets/images/CustomerBox logo.png';

export default function Logo() {
  return (
    <>
      {/* Larger resolution */}
      <Card sx={{ maxWidth: 345, ml: -2, mr: 2 }}>
        <CardMedia component="img" height="40" image={logo} alt="logo" />
      </Card>
      <Typography
        variant="h6"
        noWrap
        component={Link}
        href="/"
        sx={{
          mr: 2,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        CustomerBox
      </Typography>
    </>
  );
}
