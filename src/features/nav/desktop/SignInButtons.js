import React from 'react';
import { Box, Button, Link, Stack } from '@mui/material';

export default function SignInButtons() {
  return (
    <Box sx={{ display: { sm: 'flex' } }}>
      <Stack direction="row" spacing={2} sx={{ ml: 1 }}>
        <Button component={Link} href="/signin" variant="contained">
          Sign In
        </Button>
        <Button component={Link} href="/signup" variant="outlined">
          Sign Up
        </Button>
      </Stack>
    </Box>
  );
}
