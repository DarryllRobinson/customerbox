import { Box } from '@mui/material';

import Logo from '../Logo';

export default function MobileMenu(props) {
  const { checked, isLoggedIn, onChange, setIsLoggedIn } = props;
  console.log({ props });

  return (
    <Box>
      <Logo />
      MobileMenu
    </Box>
  );
}
