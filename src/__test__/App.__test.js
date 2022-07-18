import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Mocks
import '../__mocks__/window.js';

import { App } from '../App';

const appComponent = render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

test('renders Box', () => {
  /*render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );*/
  const boxElement = screen.getByLabelText('box-outline');
  expect(boxElement).toBeInTheDocument();
});
