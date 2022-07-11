import React from 'react';
import { Card, CardMedia } from '@mui/material';

import logo from '../../../assets/images/CustomerBox logo.png';

export default function Logo() {
  return (
    <>
      {/* Larger resolution */}
      <Card sx={{ maxWidth: 80 }}>
        <CardMedia component="img" height="50" image={logo} alt="logo" />
      </Card>
    </>
  );
}
