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
`;

const FormField = styled(Box)`
  margin-bottom: 16px;
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
  }

  & .MuiInputAdornment-root {
    margin-right: 8px;
  }
`;

const HelpText = styled(Typography)`
  color: #666;
  font-size: 12px;
  margin-top: 8px;
`;

const SubmitButton = styled(Button)`
  width: 100px;
  height: 36px;
  background-color: white;
  color: black;
  border-radius: 8px;
  text-transform: none;
  font-size: 14px;
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  
  &:hover {
    background-color: #E0E0E0;
  }
`;

interface EditEmailProps {
  onClose: () => void;
}

const EditEmail: React.FC<EditEmailProps> = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);

  const handleSubmit = () => {
    setConfirmModalOpen(true);
  };

  const handleConfirm = () => {
    // Implement email change logic here
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
          <HeaderTitle>Edit Email</HeaderTitle>
        </Header>

        <Content>
          <FormField>
            <Label>Enter new email address</Label>
            <StyledTextField
              placeholder="new.email@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
            />
            <HelpText>
              A confirmation will be sent to this account. Click on the confirmation link to verify and add this email.
            </HelpText>
          </FormField>

          <FormField>
            <Label>Enter your password</Label>
            <StyledTextField
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              InputProps={{
                endAdornment: (
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                    sx={{ color: '#666', padding: '8px' }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
            />
          </FormField>

          <SubmitButton onClick={handleSubmit}>
            Submit
          </SubmitButton>
        </Content>

        <ConfirmationModal
          open={confirmModalOpen}
          title="Please verify email to confirm the change."
          message="You'll be logged out of app once you verify."
          onClose={() => setConfirmModalOpen(false)}
          onConfirm={handleConfirm}
          confirmText="Okay"
          showCancel={false}
        />
      </Container>
    </Overlay>
  );
};

export default EditEmail; 