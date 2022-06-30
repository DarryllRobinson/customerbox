import {
  AppBar,
  Box,
  Button,
  Link,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';

import HomeNavBar from './HomeNavBar';
import UserNavBar from './UserNavBar';

export default function NavBar(props) {
  const { checked, onChange } = props;
  const isLoggedIn = false;

  const theme = useTheme();

  const menuToDisplay = () => {
    switch (isLoggedIn) {
      case true:
        return <UserNavBar />;
        break;
      case false:
        return <HomeNavBar checked={checked} onChange={onChange} />;
        break;
      default:
        return <div>Problem with NavBar selection</div>;
    }
  };

  return (
    <>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        {menuToDisplay()}
      </AppBar>
    </>
  );
}
