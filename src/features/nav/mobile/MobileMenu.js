import { Box } from '@mui/material';

import MenuChoices from './MenuChoices';
import Logo from './Logo';
import UserMenu from './UserMenu';
import SignInButtons from './SignInButtons';

export default function MobileMenu(props) {
  const { checked, isLoggedIn, onChange, setIsLoggedIn } = props;

  return (
    <>
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <MenuChoices
          checked={checked}
          isLoggedIn={isLoggedIn}
          onChange={onChange}
          setIsLoggedIn={setIsLoggedIn}
        />
        <Logo />
      </Box>
      <Box sx={{ justifyContent: 'flex-end', my: 1 }}>
        {isLoggedIn && <UserMenu props />}
        {!isLoggedIn && <SignInButtons />}
      </Box>
    </>
  );
}
