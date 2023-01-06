import { render, screen } from '@testing-library/react';

import Logo from '../Logo';

describe('Testing the Logo component', () => {
  test('render the Logo', () => {
    render(<Logo />);
    const logoCardElement = screen.getByLabelText('card-logo');
    expect(logoCardElement).toBeInTheDocument();
  });
});
