import React, { useState } from 'react';
import { Box, styled, Button, Avatar, Menu, MenuItem, ListItemIcon, Typography } from '@mui/material';
import {
  Chat,
  Image as ImageIcon,
  Videocam,
  AudioFile,
  Settings,
  Person,
  Download,
  Upgrade,
  Search,
  Logout,
  Build
} from '@mui/icons-material';
import BottomBar from './BottomBar';

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #1E1E1E;
  padding: 20px;
  padding-bottom: 80px;
  position: relative;
`;

const ActionButtonsContainer = styled(Box)`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 40px;
`;

const ActionButtonsGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 12px;
  max-width: 600px;
`;

const ActionButton = styled(Button)`
  background-color: #2A2A2A;
  color: #fff;
  text-transform: none;
  padding: 12px 24px;
  border-radius: 12px;
  gap: 8px;
  min-width: 160px;
  
  &:first-of-type {
    background-color: rgba(139, 139, 255, 0.2);
    color: #8B8BFF;
  }

  &:hover {
    background-color: ${props => props.color === 'primary' ? 'rgba(139, 139, 255, 0.3)' : '#3A3A3A'};
  }

  & .MuiSvgIcon-root {
    font-size: 20px;
  }
`;

const MicrophoneSection = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-top: 20px;
`;

const MicrophoneCircle = styled(Box)`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(139, 139, 255, 0.1) 0%, rgba(42, 42, 42, 0.8) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  box-shadow: 0 0 40px rgba(139, 139, 255, 0.1);

  &::before {
    content: '';
    position: absolute;
    width: 220px;
    height: 220px;
    border-radius: 50%;
    border: 2px solid rgba(139, 139, 255, 0.2);
  }

  &::after {
    content: '';
    position: absolute;
    width: 240px;
    height: 240px;
    border-radius: 50%;
    border: 1px solid rgba(139, 139, 255, 0.1);
  }

  img {
    width: 320px;
    height: auto;
  }
`;

const UserAvatarButton = styled(Box)`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  overflow: hidden;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledMenu = styled(Menu)`
  & .MuiPaper-root {
    background-color: #2A2A2A;
    color: white;
    border-radius: 12px;
    min-width: 250px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }
`;

const StyledMenuItem = styled(MenuItem)`
  padding: 12px 16px;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  & .MuiListItemIcon-root {
    color: #666;
    min-width: 40px;
  }
`;

const MenuDivider = styled(Box)`
  height: 1px;
  background-color: #3A3A3A;
  margin: 8px 0;
`;

const AnimatedMicrophoneImage = styled('img')`
  width: 300px;
  height: auto;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.8;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const MainContent: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { icon: <Build />, label: 'Tasks', beta: true },
    { icon: <Person />, label: 'My GPTs' },
    { icon: <Settings />, label: 'Customize ChatGPT' },
    { icon: <Settings />, label: 'Settings' },
    { divider: true },
    { icon: <Download />, label: 'Download the Windows app' },
    { icon: <Upgrade />, label: 'Upgrade Plan' },
    { icon: <Search />, label: 'Get ChatGPT search extension' },
    { divider: true },
    { icon: <Logout />, label: 'Log out' },
  ];

  const actionButtons = [
    { icon: <Chat />, label: 'Chat', color: 'primary' },
    { icon: <ImageIcon />, label: 'Text to Image' },
    { icon: <Videocam />, label: 'Text to Video' },
    { icon: <AudioFile />, label: 'Text to Audio' },
    { icon: <ImageIcon />, label: 'Image to Image' },
    { icon: <Videocam />, label: 'Image to Video' },
  ];

  return (
    <>
      <Container>
        <UserAvatarButton onClick={handleClick}>
          <img src="/images/User 02c.png" alt="User" />
        </UserAvatarButton>
        <StyledMenu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          {menuItems.map((item, index) => (
            item.divider ? (
              <MenuDivider key={`divider-${index}`} />
            ) : (
              <StyledMenuItem key={item.label} onClick={handleClose}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <Typography>
                  {item.label}
                  {item.beta && (
                    <Box
                      component="span"
                      sx={{
                        ml: 1,
                        px: 1,
                        py: 0.5,
                        fontSize: '0.75rem',
                        borderRadius: '4px',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      BETA
                    </Box>
                  )}
                </Typography>
              </StyledMenuItem>
            )
          ))}
        </StyledMenu>

        <ActionButtonsContainer>
          <ActionButtonsGrid>
            {actionButtons.map((button) => (
              <ActionButton
                key={button.label}
                variant="contained"
                startIcon={button.icon}
                color={button.color as 'primary' | undefined}
              >
                {button.label}
              </ActionButton>
            ))}
          </ActionButtonsGrid>
        </ActionButtonsContainer>

        <MicrophoneSection>
          <MicrophoneCircle>
            <AnimatedMicrophoneImage src="images/Circle and triangle.png" alt="logo" />
          </MicrophoneCircle>
          <Box sx={{ color: '#fff', mt: 5, opacity: 0.8 }}>
            Tap to speak
          </Box>
        </MicrophoneSection>
      </Container>
      <BottomBar />
    </>
  );
};

export default MainContent; 