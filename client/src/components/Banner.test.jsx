import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render,screen } from '@testing-library/react';
import {Banner} from './Banner';

it('should render one heading element', () => {
  render(<Banner/>);
  const headingElement = screen.getByRole('heading');
  expect(headingElement).toBeInTheDocument();
});