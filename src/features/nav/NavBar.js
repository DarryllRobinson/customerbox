import React, { useState } from 'react';
import {
  AppBar,
  Container,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { history } from '../../helpers';
import MobileMenu from './mobile/MobileMenu';
//import LaptopMenu from './LaptopMenu';
import DesktopMenu from './desktop/DesktopMenu';

export default function NavBar(props) {
  const { checked, onChange } = props;

  // State hooks
  const theme = useTheme();

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const mobile = useMediaQuery(theme.breakpoints.down('sm'));
  //const laptop = useMediaQuery(theme.breakpoints.between('sm', 'lg'));
  const desktop = useMediaQuery(theme.breakpoints.up('sm'));

  function menuToDisplay() {
    const { pathname } = history.location;

    // Home screen
    if (pathname === '/' || pathname === 'signin' || pathname === '/signup') {
      return (
        <>
          {/* Determine menu based on screen size */}
          {mobile && (
            <MobileMenu
              checked={checked}
              onChange={onChange}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          )}
          {/*laptop && (
            <LaptopMenu
              checked={checked}
              onChange={onChange}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          )*/}
          {desktop && (
            <DesktopMenu
              checked={checked}
              onChange={onChange}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          )}
        </>
      );
    }

    return null;
  }

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Determine which menu to display based on pathname */}
          {menuToDisplay()}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
