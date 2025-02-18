import React from 'react';
import { Box, styled } from '@mui/material';
import Sidebar from './Sidebar';

const MainContainer = styled(Box)`
  margin-left: 300px;
  flex: 1;
  min-height: calc(100vh - 80px); // Account for bottom bar height
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <MainContainer>
        {children}
      </MainContainer>
    </Box>
  );
};

export default Layout; 