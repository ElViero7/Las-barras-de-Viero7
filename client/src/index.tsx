import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MantineProvider, createTheme } from '@mantine/core';
import { Provider } from 'react-redux';

const theme = createTheme({
  primaryColor: 'blue',
  fontFamily: 'Segoe UI, Roboto, sans-serif',
  defaultRadius: 'md',
});

ReactDOM.createRoot(document.getElementById('root')!).render(

      <React.StrictMode>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <App />
        </MantineProvider>
      </React.StrictMode>
);
