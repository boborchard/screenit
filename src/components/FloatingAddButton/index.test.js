import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import FloatingAddButton from './index';

it('renders floating add button', () => {
  render(
    <Router>
      <FloatingAddButton />
    </Router>
  );
  expect(screen.getByText('Add New')).toBeInTheDocument();
});
