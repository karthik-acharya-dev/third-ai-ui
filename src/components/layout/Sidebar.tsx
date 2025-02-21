import React from 'react';
import { 
  Drawer, 
  List, 
  ListItemIcon, 
  ListItemText, 
  styled,
  ListItemButton,
  TextField,
  Typography,
  Box,
  InputAdornment,
  useTheme,
  useMediaQuery,
  Avatar,
  IconButton
} from '@mui/material';
import { 
  Chat, 
  Search,
  VideoCall,
  Image,
  AudioFile,
  MoreVert as MoreVertIcon
} from '@mui/icons-material';
import BottomBar from './BottomBar';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  variant: 'permanent' | 'temporary';
}

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: 300,
    backgroundColor: 'rgba(39, 37, 37, 0.7)',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    border: 'none',
    [theme.breakpoints.down('md')]: {
      width: '85%',
      maxWidth: 300,
    },
  },
  '& .MuiBackdrop-root': {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
}));

const SearchContainer = styled(Box)`
  padding: 16px;
  background-color:rgba(39, 37, 37, 0.7)';
  position: sticky;
  top: 0;
  z-index: 1;
  margin-top: 28px; // Space for the hamburger menu
`;

const SearchField = styled(TextField)`
  & .MuiOutlinedInput-root {
    color: white;
    background-color: #2A2A2A;
    border-radius: 8px;
    & fieldset {
      border: none;
    }
    &:hover fieldset {
      border: none;
    }
    &.Mui-focused fieldset {
      border: none;
    }
  }
  & .MuiInputAdornment-root {
    color: #666;
  }
`;

const ScrollableContent = styled(Box)`
  flex: 1;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 8px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #2A2A2A;
    border-radius: 4px;
    &:hover {
      background-color: #3A3A3A;
    }
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  /* Firefox scrollbar */
  scrollbar-width: thin;
  scrollbar-color: #2A2A2A transparent;
`;

const TimeSection = styled(Typography)`
  color: #666;
  padding: 16px;
  font-size: 0.9rem;
`;

const StyledListItemButton = styled(ListItemButton)`
  padding: 12px 16px;
  margin: 4px 8px;
  border-radius: 8px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const ListItemContent = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const UserInfo = styled(Box)`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  gap: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const UserAvatar = styled(Avatar)`
  width: 32px;
  height: 32px;
`;

const UserActions = styled(Box)`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const menuSections = [
  {
    title: 'Yesterday',
    items: [
      { text: 'How to bake a sourdough bread?', icon: <Chat />, type: 'Chat' },
      { text: 'History of the Eiffel Tower?', icon: <Chat />, type: 'Chat' },
    ]
  },
  {
    title: 'Text to Image',
    items: [
      { text: 'Image of a futuristic cityscape', icon: <Image />, type: 'Text to Image' },
    ]
  },
  {
    title: '2 Days ago',
    items: [
      { text: 'Animate this image of a sunrise.', icon: <VideoCall />, type: 'Image to Video' },
      { text: 'Cinematic video of a rainforest', icon: <VideoCall />, type: 'Text to Video' },
    ]
  },
  {
    title: 'Last Week',
    items: [
      { text: 'Read this paragraph in a British accent.', icon: <AudioFile />, type: 'Text to Audio' },
      { text: 'Turn this sketch into a watercolor', icon: <Image />, type: 'Image to Image' },
    ]
  }
];

const Sidebar: React.FC<SidebarProps> = ({ open, onClose, variant }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const handleSettingsClick = () => {
    navigate('/settings');
    if (isMobile) {
      onClose();
    }
  };

  return (
    <StyledDrawer 
      variant={variant}
      anchor="left"
      open={open}
      onClose={onClose}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <SearchContainer>
        <SearchField
          fullWidth
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </SearchContainer>
      <ScrollableContent>
        {menuSections.map((section) => (
          <React.Fragment key={section.title}>
            <TimeSection>{section.title}</TimeSection>
            <List>
              {section.items.map((item) => (
                <StyledListItemButton 
                  key={item.text}
                  onClick={() => isMobile && onClose()}
                >
                  <ListItemIcon sx={{ color: 'white', minWidth: '40px' }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemContent>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      {item.text}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#666' }}>
                      {item.type}
                    </Typography>
                  </ListItemContent>
                </StyledListItemButton>
              ))}
            </List>
          </React.Fragment>
        ))}
      </ScrollableContent>
      <UserInfo>
        <UserAvatar src="/avatar.jpg" alt="Adam Scott" />
        <Typography variant="body2" sx={{ color: 'white' }}>
          Adam Scott
        </Typography>
        <UserActions>
          <IconButton size="small" sx={{ color: '#666' }} onClick={handleSettingsClick}>
            <MoreVertIcon />
          </IconButton>
        </UserActions>
      </UserInfo>
    </StyledDrawer>
  );
};

export default Sidebar; 