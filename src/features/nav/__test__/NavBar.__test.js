import { render, screen } from '@testing-library/react';

import NavBar from '../NavBar';

describe('Testing the NavBar component', () => {
  test('render the Desktop AppBar component', () => {
    render(<NavBar />);
    const desktopAppBar = screen.getByLabelText('desktop-navbar-appbar');
    expect(desktopAppBar.toBeInTheDocument());
  });
});
