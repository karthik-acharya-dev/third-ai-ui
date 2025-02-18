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
  InputAdornment
} from '@mui/material';
import { 
  Chat, 
  Search,
  VideoCall,
  Image,
  AudioFile
} from '@mui/icons-material';

const StyledDrawer = styled(Drawer)`
  & .MuiDrawer-paper {
    width: 300px;
    background-color: #1E1E1E;
    color: white;
    display: flex;
    flex-direction: column;
  }
`;

const SearchContainer = styled(Box)`
  padding: 16px;
  background-color: #1E1E1E;
  position: sticky;
  top: 0;
  z-index: 1;
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
  padding: 8px 16px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const ListItemContent = styled(Box)`
  display: flex;
  flex-direction: column;
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

const Sidebar: React.FC = () => {
  return (
    <StyledDrawer variant="permanent" anchor="left">
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
                <StyledListItemButton key={item.text}>
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
    </StyledDrawer>
  );
};

export default Sidebar; 