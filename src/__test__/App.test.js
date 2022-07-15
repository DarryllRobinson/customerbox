import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { App } from '../App';

test('renders Box', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const boxElement = screen.getByLabelText('box-outline');
  expect(boxElement).toBeInTheDocument();
});
