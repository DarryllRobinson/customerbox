import { fireEvent, render, screen } from '@testing-library/react';
import { useTheme } from '@mui/material/styles';

import MenuChoices from '../MenuChoices';

jest.mock('useTheme', () => {
  const Styles = jest.requireActual('@material-ui/core/styles');

  const createMuiTheme = jest.requireActual(
    '@material-ui/core/styles/createMuiTheme'
  ).default;

  const options = jest.requireActual('../../../src/themes/options').default;

  return {
    ...Styles,
    makeStyles: (func) => {
      const theme = createMuiTheme(options);
      return Styles.makeStyles(func.bind(null, theme));
    },
  };
});

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

  test('change theme colour', () => {
    const theme = useTheme();
    const switchElement = screen.getByLabelText('dark-switch');
    fireEvent.click(switchElement);
    expect(theme.palette.mode).toEqual('dark');
  });
});
