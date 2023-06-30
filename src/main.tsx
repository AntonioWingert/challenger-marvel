import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './style/GlobalStyle.ts';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
