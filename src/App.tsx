import React from 'react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import Layout from './components/layout/Layout';
import MainContent from './components/layout/MainContent';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8B8BFF',
    },
    background: {
      default: '#1E1E1E',
      paper: '#2A2A2A',
    },
  },
  typography: {
    fontFamily: '"Segoe UI", "Roboto", "Arial", sans-serif',
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <MainContent />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
