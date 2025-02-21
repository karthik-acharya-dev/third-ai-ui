import React, { useState } from 'react';
import { Box, styled, IconButton, useTheme, useMediaQuery } from '@mui/material';
import Sidebar from './Sidebar';
import MenuIcon from '@mui/icons-material/Menu';

const LayoutContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  minHeight: '100vh',
  backgroundColor: '#000000',
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  position: 'fixed',
  top: '20px',
  left: '20px',
  zIndex: 1200,
  width: '40px',
  height: '40px',
  color: '#ffffff',
  backgroundColor: 'rgba(42, 42, 42, 0.8)',
  borderRadius: '12px',
  padding: '8px',
  '&:hover': {
    backgroundColor: 'rgba(58, 58, 58, 0.9)',
  },
  '& .MuiSvgIcon-root': {
    fontSize: '24px',
  },
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <LayoutContainer>
      <MenuButton onClick={handleDrawerToggle}>
        <MenuIcon />
      </MenuButton>
      <Sidebar 
        open={isMobile ? mobileOpen : true} 
        onClose={handleDrawerToggle}
        variant={isMobile ? 'temporary' : 'permanent'}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { md: `calc(100% - 300px)` },
          ml: { md: '300px' },
        }}
      >
        {children}
      </Box>
    </LayoutContainer>
  );
};

export default Layout; 