import { fireEvent, render, screen } from '@testing-library/react';

import MenuChoices from '../MenuChoices';

describe('Testing the MenuChoices component', () => {
  beforeEach(() => {
    render(<MenuChoices />);
  });

  test('render MenuChoices IconButton', () => {
    const menuIconButtonElement = screen.getByLabelText('menu choices');
    expect(menuIconButtonElement).toBeInTheDocument();
  });

  test('render MenuChoices Menu', () => {
    const menuElement = screen.getByLabelText('menu choices menu');
    expect(menuElement).toBeInTheDocument();
  });

  test('render dark theme switch', () => {
    const switchElement = screen.getByLabelText('dark-switch');
    expect(switchElement).toBeInTheDocument();
  });
});

describe('Testing the menu items outside of the main test', () => {
  const rtl = render(<MenuChoices />);
  expect(
    rtl.getByTestId('menu choices menu item').querySelectorAll('li.comment')
      .length
  ).toEqual(2);
});
