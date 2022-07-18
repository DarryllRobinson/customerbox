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
import DashboardMenu from './dashboard/DashboardMenu';

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
    //console.log({ theme });
    //console.log({ pathname });

    // Home screen
    if (
      pathname === '/' ||
      pathname === '/signin' ||
      pathname === '/signup' ||
      pathname === '/pricing'
    ) {
      return (
        <>
          {/* Determine menu based on screen size */}
          {mobile && (
            <AppBar position="fixed">
              <Container maxWidth="xl">
                <Toolbar disableGutters>
                  <MobileMenu
                    checked={checked}
                    onChange={onChange}
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                </Toolbar>
              </Container>
            </AppBar>
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
            <AppBar aria-label="desktop-navbar-appbar" position="fixed">
              <Container maxWidth="xl">
                <Toolbar disableGutters>
                  <DesktopMenu
                    checked={checked}
                    onChange={onChange}
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                </Toolbar>
              </Container>
            </AppBar>
          )}
        </>
      );
    }

    return (
      <DashboardMenu
        checked={checked}
        onChange={onChange}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
    );
  }

  return (
    <>
      {/* Determine which menu to display based on pathname */}
      {menuToDisplay()}
    </>
  );
}
