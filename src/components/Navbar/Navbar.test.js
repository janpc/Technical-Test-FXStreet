import * as React from 'react';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Navbar from '.';

describe('Sidebar Tests', () => {
  test('renders 7 buttons', () => {
    const { container } = render(<Navbar />);
    const buttons = container.querySelectorAll('button');
    expect(buttons.length).toBe(7);
  });
});
