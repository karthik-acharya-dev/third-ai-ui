import React from 'react';
import { Box, styled, TextField, InputAdornment } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const BottomBarContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    color: 'white',
    backgroundColor: '#2A2A2A',
    borderRadius: '8px',
    padding: '8px 12px',
    '& fieldset': {
      border: 'none',
    },
    '&:hover fieldset': {
      border: 'none',
    },
    '&.Mui-focused fieldset': {
      border: 'none',
    },
  },
  '& .MuiInputAdornment-root': {
    color: '#666',
    cursor: 'pointer',
    marginRight: '8px',
    '&:hover': {
      color: '#fff',
    },
  },
}));

interface BottomBarProps {
  placeholder?: string;
  variant?: 'sidebar' | 'main';
}

const BottomBar: React.FC<BottomBarProps> = ({ 
  placeholder = 'Type here...',
  variant = 'main'
}) => {
  return (
    <BottomBarContainer>
      <StyledTextField
        fullWidth
        placeholder={placeholder}
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SendIcon fontSize="small" />
            </InputAdornment>
          ),
          sx: {
            height: '44px',
          }
        }}
      />
    </BottomBarContainer>
  );
};

export default BottomBar; 