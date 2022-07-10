import React from 'react';
import { Box, Button, Link } from '@mui/material';

// Constants for menu items
const pages = [
  { title: 'Products', link: '#' },
  { title: 'Solutions', link: '#' },
  { title: 'Pricing', link: '/pricing' },
];

export default function MenuChoices() {
  return (
    <Box sx={{ display: { sm: 'flex' }, flexGrow: 1 }}>
      {pages.map((page) => (
        <Button
          key={page.title}
          component={Link}
          sx={{ color: 'white', display: 'block' }}
          href={page.link}
        >
          {page.title}
        </Button>
      ))}
    </Box>
  );
}
