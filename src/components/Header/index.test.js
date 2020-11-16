import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './index';

it('renders logo', () => {
  render(<Header />);
  expect(screen.getByText('Screen it')).toBeInTheDocument();
});
