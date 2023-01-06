import React from 'react';
import { Card, CardMedia } from '@mui/material';

import logo from '../../../assets/images/CustomerBox logo.png';

export default function Logo() {
  return (
    <>
      {/* Larger resolution */}
      <Card aria-label="card-logo" sx={{ maxWidth: 80 }}>
        <CardMedia
          aria-label="cardmedia-logo"
          component="img"
          height="50"
          image={logo}
          alt="logo"
        />
      </Card>
    </>
  );
}
