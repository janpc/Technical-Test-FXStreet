import * as React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SideBar from '.';

describe('Sidebar Tests', () => {
  test('renders logo.svg', () => {
    render(<SideBar />);
    const linkElement = screen.getByText(/logo.svg/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders 5 buttons', () => {
    const { container } = render(<SideBar />);
    const buttons = container.querySelectorAll('button');
    expect(buttons.length).toBe(5);
  });
});
