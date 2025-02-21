import React, { useState } from 'react';
import { Box, Typography, styled, IconButton, TextField, Button } from '@mui/material';
import { ArrowBack, Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../components/ConfirmationModal';

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
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const Header = styled(Box)`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: rgba(32, 33, 35, 0.3);
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

    &.Mui-error {
      background-color: rgba(95, 33, 32, 0.6);
    }
  }

  & .MuiInputAdornment-root {
    margin-right: 8px;
  }
`;

const ErrorText = styled(Typography)`
  color: #ef5350;
  font-size: 12px;
  margin-top: 8px;
`;

const SubmitButtonContainer = styled(Box)`
  position: fixed;
  bottom: 0;
  width: 500px;
  padding: 16px;
  background-color: rgb(18, 18, 18);
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const SubmitButton = styled(Button)`
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

interface ChangePasswordProps {
  onClose: () => void;
}

const ChangePassword: React.FC<ChangePasswordProps> = ({ onClose }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);

  const handleSubmit = () => {
    if (currentPassword === '') {
      setError('Incorrect password. Please try again.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setConfirmModalOpen(true);
  };

  const handleConfirm = () => {
    // Implement password change logic here
    setConfirmModalOpen(false);
    onClose();
  };

  return (
    <Overlay onClick={onClose}>
      <Container onClick={e => e.stopPropagation()}>
        <Header>
          <BackButton onClick={onClose}>
            <ArrowBack />
          </BackButton>
          <HeaderTitle>Change Password</HeaderTitle>
        </Header>

        <Content>
          <FormField>
            <Label>Enter your current password</Label>
            <StyledTextField
              type={showCurrentPassword ? 'text' : 'password'}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              error={error === 'Incorrect password. Please try again.'}
              fullWidth
              InputProps={{
                endAdornment: (
                  <IconButton
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    edge="end"
                    sx={{ color: '#666', padding: '8px' }}
                  >
                    {showCurrentPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
            />
            {error === 'Incorrect password. Please try again.' && (
              <ErrorText>{error}</ErrorText>
            )}
          </FormField>

          <FormField>
            <Label>Enter your new password</Label>
            <StyledTextField
              type={showNewPassword ? 'text' : 'password'}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              error={error === 'Passwords do not match'}
              fullWidth
              InputProps={{
                endAdornment: (
                  <IconButton
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    edge="end"
                    sx={{ color: '#666', padding: '8px' }}
                  >
                    {showNewPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
            />
          </FormField>

          <FormField>
            <Label>Confirm your new password</Label>
            <StyledTextField
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={error === 'Passwords do not match'}
              fullWidth
              InputProps={{
                endAdornment: (
                  <IconButton
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    edge="end"
                    sx={{ color: '#666', padding: '8px' }}
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
            />
            {error === 'Passwords do not match' && (
              <ErrorText>{error}</ErrorText>
            )}
          </FormField>
        </Content>

        <SubmitButtonContainer>
          <SubmitButton onClick={handleSubmit}>
            Submit
          </SubmitButton>
        </SubmitButtonContainer>

        <ConfirmationModal
          open={confirmModalOpen}
          title="Your password has been successfully reset."
          message="You can now sign in with your new password."
          onClose={() => setConfirmModalOpen(false)}
          onConfirm={handleConfirm}
          confirmText="Sign In"
          showCancel={false}
        />
      </Container>
    </Overlay>
  );
};

export default ChangePassword; 