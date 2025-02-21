import React, { useState } from 'react';
import { Box, Typography, styled, IconButton, TextField, Button } from '@mui/material';
import { ArrowBack, Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Overlay = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1200;
`;

const Container = styled(Box)`
  height: 100vh;
  width: 500px;
  background-color: rgb(18, 18, 18);
  color: white;
  position: relative;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
  }
`;

const Header = styled(Box)`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: rgba(32, 33, 35, 0.3);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const BackButton = styled(IconButton)`
  color: white;
  padding: 8px;
  background-color: rgba(32, 33, 35, 0.6);
  border-radius: 8px;
  margin-right: 16px;

  &:hover {
    background-color: rgba(52, 53, 65, 0.8);
  }
`;

const HeaderTitle = styled(Typography)`
  font-size: 16px;
  font-weight: 400;
  color: white;
`;

const Content = styled(Box)`
  flex: 1;
  padding: 24px;
  padding-bottom: 80px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
  }
`;

const AvatarSection = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
`;

const Avatar = styled(Box)`
  width: 100px;
  height: 100px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  margin-bottom: 24px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const EditIconButton = styled(IconButton)`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: rgba(32, 33, 35, 0.6);
  padding: 4px;

  &:hover {
    background-color: rgba(52, 53, 65, 0.8);
  }

  & .MuiSvgIcon-root {
    font-size: 16px;
    color: white;
  }
`;

const FormField = styled(Box)`
  margin-bottom: 24px;
`;

const Label = styled(Typography)`
  color: #666;
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 8px;
  text-transform: uppercase;
`;

const StyledTextField = styled(TextField)`
  width: 100%;
  
  & .MuiOutlinedInput-root {
    background-color: rgba(32, 33, 35, 0.6);
    border-radius: 8px;
    color: white;
    height: 44px;
    
    & fieldset {
      border: none;
    }
    
    &:hover fieldset {
      border: none;
    }
    
    &.Mui-focused fieldset {
      border: none;
    }

    &.Mui-disabled {
      background-color: rgba(32, 33, 35, 0.6);
      color: rgba(255, 255, 255, 0.5);
      -webkit-text-fill-color: rgba(255, 255, 255, 0.5);
    }
  }

  & .MuiInputAdornment-root {
    margin-right: 8px;
  }
`;

const EditIcon = styled(Edit)`
  color: #666;
  font-size: 20px;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const SaveButtonContainer = styled(Box)`
  position: fixed;
  bottom: 0;
  width: 500px;
  padding: 16px;
  background-color: rgba(18, 18, 18, 0.8);
  backdrop-filter: blur(16px);
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const SaveButton = styled(Button)`
  width: 100px;
  height: 36px;
  background-color: white;
  color: black;
  border-radius: 8px;
  text-transform: none;
  font-size: 14px;
  
  &:hover {
    background-color: #E0E0E0;
  }
`;

interface EditProfileProps {
  onClose: () => void;
}

const EditProfile: React.FC<EditProfileProps> = ({ onClose }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: 'Adam Scott',
    email: 'adam.sc@gmail.com',
    password: '******'
  });
  const [isNameEditable, setIsNameEditable] = useState(false);

  const handleAvatarClick = () => {
    navigate('/edit-avatar');
  };

  const handleEditEmail = () => {
    navigate('/edit-email');
  };

  const handleEditPassword = () => {
    navigate('/change-password');
  };

  const handleEditName = () => {
    setIsNameEditable(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setIsNameEditable(false);
    onClose();
  };

  return (
    <Overlay onClick={onClose}>
      <Container onClick={e => e.stopPropagation()}>
        <Header>
          <BackButton onClick={onClose}>
            <ArrowBack />
          </BackButton>
          <HeaderTitle>Edit Profile</HeaderTitle>
        </Header>

        <Content>
          <AvatarSection>
            <Avatar onClick={handleAvatarClick}>
              <img src="/user-avatar/User Avatar.png" alt="Profile" />
              <EditIconButton>
                <Edit />
              </EditIconButton>
            </Avatar>
          </AvatarSection>

          <FormField>
            <Label>Name</Label>
            <StyledTextField
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={!isNameEditable}
              fullWidth
              variant="outlined"
              InputProps={{
                endAdornment: <EditIcon onClick={handleEditName} />
              }}
            />
          </FormField>

          <FormField>
            <Label>Email</Label>
            <StyledTextField
              name="email"
              value={formData.email}
              disabled
              fullWidth
              variant="outlined"
              InputProps={{
                endAdornment: <EditIcon onClick={handleEditEmail} />
              }}
            />
          </FormField>

          <FormField>
            <Label>Password</Label>
            <StyledTextField
              name="password"
              type="password"
              value={formData.password}
              disabled
              fullWidth
              variant="outlined"
              InputProps={{
                endAdornment: <EditIcon onClick={handleEditPassword} />
              }}
            />
          </FormField>
        </Content>

        <SaveButtonContainer>
          <SaveButton variant="contained" onClick={handleSave}>
            Save
          </SaveButton>
        </SaveButtonContainer>
      </Container>
    </Overlay>
  );
};

export default EditProfile; 