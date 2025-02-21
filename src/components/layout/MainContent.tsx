import React, { useState } from 'react';
import { Box, styled, Button, Avatar, Menu, MenuItem, ListItemIcon, Typography, Drawer, Switch, ListItem, ListItemText, IconButton } from '@mui/material';
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
  Build,
  KeyboardArrowLeft
} from '@mui/icons-material';
import BottomBar from './BottomBar';

const MainContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  position: relative;
  background-color: #000000;
`;

const TopBar = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
 
`;

const ContentArea = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  position: relative;
  padding-bottom: 80px;
  background-color: #000000;
`;

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 80px);
  background-color:rgb(22, 22, 22);
 
  padding: 0 20px 20px 20px;
  position: relative;
`;

const BottomBarWrapper = styled(Box)`
  position: fixed;
  bottom: 0;
  width: calc(100% - 300px); // Subtract sidebar width
  padding: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
background-color:rgb(22, 22, 22);
  z-index: 1000;
  @media (max-width: 900px) {
    width: 100%; // Full width on mobile
  }
`;

const ActionButtonsContainer = styled(Box)`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 4px;
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
  padding: 12px 4px;
  border-radius: 12px;
  gap: 6px;
  min-width: 120px;
  height: 52px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  line-height: 1.2;
  
  &:first-of-type {
    background-color: rgba(139, 139, 255, 0.2);
    color: #8B8BFF;
  }

  &:hover {
    background-color: ${props => props.color === 'primary' ? 'rgba(139, 139, 255, 0.3)' : '#3A3A3A'};
  }

  & .MuiSvgIcon-root {
    font-size: 20px;
    margin-bottom: 4px;
  }

  @media (max-width: 768px) { 
    min-width: 105px;
  }
`;


const ButtonText = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2px;


  & > span:first-of-type {
    font-size: 14px;
    opacity: 0.9;
  }

  & > span:last-child {
    font-size: 14px;
    opacity: 0.9;
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
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 12px;
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

const BotSelectionDrawer = styled(Drawer)`
  & .MuiDrawer-paper {
    width: 300px;
    background-color: rgb(0, 0, 0);
    color: white;
    border: none;
    padding: 0;
    right: 0;
  }
`;

const DrawerHeader = styled(Box)`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: rgba(32, 33, 35, 0.5);

  & .MuiIconButton-root {
    padding: 8px;
    margin-right: 32px;
    color: #fff;
  }

  & .MuiTypography-root {
    font-size: 16px;
    font-weight: 400;
  }
`;

const BotListContainer = styled(Box)`
  padding: 16px;
  overflow-y: auto;
  height: calc(100% - 140px); // Account for header and save button

  /* Webkit browsers (Chrome, Safari) */
  &::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.2) transparent;

  /* Hide scrollbar when not scrolling (optional) */
  &::-webkit-scrollbar-thumb:vertical:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const BotListItem = styled(ListItem)`
  padding: 12px;
  margin: 8px 0;
  border-radius: 12px;
  background-color: rgba(32, 33, 35, 0.5);
  flex-direction: column;
  gap: 4px;

  &:hover {
    background-color: rgba(52, 53, 65, 0.9);
  }
`;

const BotItemTopRow = styled(Box)`
  display: flex;
  align-items: center;
  width: 100%;
`;

const BotAvatar = styled(Avatar)`
  width: 28px;
  height: 28px;
  margin-right: 12px;
  border-radius: 50%;
  background-color: #2A2A2A;
`;

const BotInfo = styled(Box)`
  flex: 1;
  min-width: 0;
`;

const BotName = styled(Typography)`
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BotDescription = styled(Typography)`
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  line-height: 1.4;
  margin-left: 40px;
`;

const StyledSwitch = styled(Switch)`
  & .MuiSwitch-switchBase {
    color: #666;
    
    &.Mui-checked {
      color: #8B8BFF;
      
      & + .MuiSwitch-track {
        background-color: rgba(139, 139, 255, 0.5);
        opacity: 1;
      }
    }
  }
  
  & .MuiSwitch-track {
    background-color: #444;
    opacity: 1;
  }
`;

const SaveButtonContainer = styled(Box)`
  position: fixed;
  bottom: 0;
  width: 300px;
  padding: 16px;
  background-color: rgb(27, 27, 27);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
`;

const SaveButton = styled(Button)`
  width: 30%;
  background-color: white;
  color: black;
  padding: 8px 16px;
  border-radius: 8px;
  text-transform: none;
  font-size: 14px;

  &:hover {
    background-color: #E0E0E0;
  }
`;

const MainContent: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [botDrawerOpen, setBotDrawerOpen] = useState(false);

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
    { icon: <Chat />, label: ['Chat', ''], color: 'primary' },
    { icon: <ImageIcon />, label: ['Text to', 'Image'] },
    { icon: <Videocam />, label: ['Text to', 'Video'] },
    { icon: <AudioFile />, label: ['Text to', 'Audio'] },
    { icon: <ImageIcon />, label: ['Image to', 'Image'] },
    { icon: <Videocam />, label: ['Image to', 'Video'] },
  ];

  const bots = [
    {
      name: 'ChatGPT | OpenAI',
      description: 'Access to industry-leading models for advanced AI-powered results',
      avatar: 'ai-logos/Ai Model Logos (1).png',
      active: true
    },
    {
      name: 'Gemini | Google',
      description: 'Leverage Google\'s AI for powerful, versatile solutions tailored to your needs.',
      avatar: 'ai-logos/Ai Model Logos (2).png',
      active: false
    },
    {
      name: 'Grok | X',
      description: 'Discover AI from X, designed for real-time insights and conversational tasks.',
      avatar: 'ai-logos/Ai Model Logos (3).png',
      active: false
    },
    {
      name: 'Copilot | Microsoft',
      description: 'Discover AI from X, designed for real-time insights and conversational tasks.',
      avatar: 'ai-logos/Ai Model Logos (4).png',
      active: false
    },
    {
      name: 'Llama | Meta',
      description: 'Discover AI from X, designed for real-time insights and conversational tasks.',
      avatar: 'ai-logos/Ai Model Logos (5).png',
      active: false
    },
    {
      name: 'Firefly | Adobe',
      description: 'Discover AI from X, designed for real-time insights and conversational tasks.',
      avatar: 'ai-logos/Ai Model Logos (6).png',
      active: false
    },
    {
      name: 'Claude | Anthropic',
      description: 'Discover AI from X, designed for real-time insights and conversational tasks.',
      avatar: 'ai-logos/Ai Model Logos (7).png',
      active: false
    }
  ];

  const handleBotDrawerToggle = () => {
    setBotDrawerOpen(!botDrawerOpen);
  };

  return (
    <MainContainer>
      <ContentArea>
        <Container>
          <TopBar>
            <Box sx={{ width: '40px' }} /> {/* Placeholder for menu spacing */}
            <UserAvatarButton onClick={handleBotDrawerToggle}>
              <img src="/images/User 02c.png" alt="User" />
            </UserAvatarButton>
          </TopBar>

          <ActionButtonsContainer>
            <ActionButtonsGrid>
              {actionButtons.map((button) => (
                <ActionButton
                  key={button.label.join('')}
                  variant="contained"
                  color={button.color as 'primary' | undefined}
                >
                  {button.icon}
                  <ButtonText>
                    <span>{button.label[0]}</span>
                    <span>{button.label[1]}</span>
                  </ButtonText>
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
      </ContentArea>
      <BottomBarWrapper>
        <Box sx={{ width: '100%', maxWidth: '600px' }}>
          <BottomBar variant="main" placeholder="Type here..." />
        </Box>
      </BottomBarWrapper>

      <BotSelectionDrawer
        anchor="right"
        open={botDrawerOpen}
        onClose={handleBotDrawerToggle}
        variant="temporary"
      >
        <DrawerHeader>
          <IconButton onClick={handleBotDrawerToggle}>
            <KeyboardArrowLeft />
          </IconButton>
          <Typography>Bots Selection</Typography>
        </DrawerHeader>

        <BotListContainer>
          {bots.map((bot, index) => (
            <BotListItem key={index} disableGutters>
              <BotItemTopRow>
                <BotAvatar src={bot.avatar} alt={bot.name} />
                <BotInfo>
                  <BotName>{bot.name}</BotName>
                </BotInfo>
                <StyledSwitch defaultChecked={bot.active} />
              </BotItemTopRow>
              <BotDescription>
                {bot.description}
              </BotDescription>
            </BotListItem>
          ))}
        </BotListContainer>

        <SaveButtonContainer>
          <SaveButton variant="contained">
            Save
          </SaveButton>
        </SaveButtonContainer>
      </BotSelectionDrawer>

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
    </MainContainer>
  );
};

export default MainContent; 