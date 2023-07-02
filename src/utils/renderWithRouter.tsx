import React from 'react';
import { render, RenderResult } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

const renderWithRouterAndStyles = (
  component: React.ReactElement,
  initialEntries: string[] = ['/']
): RenderResult => {
  return render(
    <ThemeProvider theme={theme}>
      <MemoryRouter initialEntries={initialEntries}>
        {component}
      </MemoryRouter>
    </ThemeProvider>);
};

export default renderWithRouterAndStyles;