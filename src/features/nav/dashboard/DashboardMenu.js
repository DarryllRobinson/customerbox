import React, { useState } from 'react';
import {
  AppBar as MuiAppBar,
  Badge,
  Box,
  createTheme,
  CssBaseline,
  Drawer as MuiDrawer,
  Divider,
  IconButton,
  List,
  styled,
  SwipeableDrawer,
  ThemeProvider,
  Toolbar,
  useTheme,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import UserMenu from './UserMenu';

// Menu items
import { MainListItems, secondaryListItems } from './ListItems';

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    //position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

//const mdTheme = createTheme();

export default function DashboardMenu(props) {
  const { checked, isLoggedIn, onChange, setIsLoggedIn } = props;

  // State hooks
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const mdTheme = useTheme();
  //console.log({ mdTheme });

  return (
    <ThemeProvider theme={mdTheme}>
      <AppBar position="fixed" open={open}>
        <Toolbar
          sx={{
            pr: '24px', // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Dashboard
          </Typography>
          <IconButton color="inherit" sx={{ mr: 2 }}>
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <UserMenu
            checked={checked}
            onChange={onChange}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          {MainListItems()}
          <Divider sx={{ my: 1 }} />
          {secondaryListItems}
        </List>
      </Drawer>
    </ThemeProvider>
  );
}
