import React from 'react';
import { Box, styled, TextField, Avatar, InputAdornment } from '@mui/material';
import { Send } from '@mui/icons-material';

const BottomBarContainer = styled(Box)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px 24px;
  background-color: #1E1E1E;
  display: flex;
  align-items: center;
  gap: 16px;
  border-top: 1px solid #2A2A2A;
  z-index: 1200;
`;

const SidebarSpace = styled(Box)`
  width: 300px;
  display: flex;
  align-items: center;
  padding-left: 16px;
`;

const InputContainer = styled(Box)`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 16px;
  margin-right: 8px; // Account for scrollbar space
`;

const UserAvatar = styled(Avatar)`
  width: 36px;
  height: 36px;
`;

const InputField = styled(TextField)`
  flex: 1;
  & .MuiOutlinedInput-root {
    background-color: #2A2A2A;
    border-radius: 8px;
    color: white;
    padding: 12px 16px;
    font-size: 14px;
    
    & fieldset {
      border: none;
    }
    &:hover fieldset {
      border: none;
    }
    &.Mui-focused fieldset {
      border: none;
    }

    & input::placeholder {
      color: #666;
      opacity: 1;
    }
  }

  & .MuiInputAdornment-root {
    margin-right: -8px;
    & .MuiSvgIcon-root {
      color: #666;
      cursor: pointer;
      font-size: 20px;
      margin-right: 8px;
      &:hover {
        color: #8B8BFF;
      }
    }
  }
`;

const BottomBar: React.FC = () => {
  return (
    <BottomBarContainer>
      <SidebarSpace>
        <UserAvatar src="/path-to-avatar.jpg" alt="Adam Scott" />
      </SidebarSpace>
      <InputContainer>
        <InputField
          fullWidth
          placeholder="Type here..."
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Send />
              </InputAdornment>
            ),
          }}
        />
      </InputContainer>
    </BottomBarContainer>
  );
};

export default BottomBar; 