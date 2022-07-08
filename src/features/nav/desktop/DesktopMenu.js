import { Box, Switch } from '@mui/material';

import Logo from '../Logo';
import MenuChoices from './MenuChoices';
import UserMenu from './UserMenu';
import SignInButtons from './SignInButtons';
import MaterialUISwitch from '../../../components/MaterialUISwitch';

export default function DesktopMenu(props) {
  const { checked, isLoggedIn, onChange, setIsLoggedIn } = props;
  //console.log({ props });

  return (
    <Box sx={{ flexGrow: 1, display: { sm: 'flex' } }}>
      <Logo />
      <MenuChoices />
      <Switch
        onChange={() => {
          setIsLoggedIn(!isLoggedIn);
        }}
      />
      <MaterialUISwitch checked={checked} onChange={onChange} />
      {isLoggedIn && <UserMenu />}
      {!isLoggedIn && <SignInButtons />}
    </Box>
  );
}
