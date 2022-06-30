import * as React from 'react';
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Link,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { Logout, Settings } from '@mui/icons-material';

import MaterialUISwitch from '../../components/MaterialUISwitch';

export default function HomeNavBar(props) {
  const { checked, onChange } = props;

  const [anchorEl, setAnchorEl] = React.useState(null); //(React.useState < null) | (HTMLElement > null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //const NavLink = styled(Link)(({ theme }) => ({}));

  return (
    <Toolbar sx={{ flexWrap: 'wrap' }}>
      <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
        Company name
      </Typography>
      <MaterialUISwitch checked={checked} onChange={onChange} />
      <nav>
        <Link
          variant="button"
          color="text.primary"
          href="#"
          sx={{ my: 1, mx: 1.5 }}
        >
          Products
        </Link>
        <Link
          variant="button"
          color="text.primary"
          href="#"
          sx={{ my: 1, mx: 1.5 }}
        >
          Solutions
        </Link>
        <Link
          variant="button"
          color="text.primary"
          href="/pricing"
          sx={{ my: 1, mx: 1.5 }}
        >
          Pricing
        </Link>
        <Link
          variant="button"
          color="text.primary"
          href="/signin"
          sx={{ my: 1, mx: 1.5 }}
        >
          Sign In
        </Link>
      </nav>
      <Button
        color="primary"
        href="/signup"
        variant="contained"
        sx={{ my: 1, mx: 1.5 }}
      >
        Sign Up
      </Button>
    </Toolbar>
  );
}
