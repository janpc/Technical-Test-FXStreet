import * as React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';

describe('App Tests', () => {
  test('renders posts', () => {
    render(<App />);
    const linkElement = screen.getByText(/latest/i);
    expect(linkElement).toBeInTheDocument();
  });
});
