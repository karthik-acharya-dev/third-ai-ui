import React, { useState } from 'react';
import { Box, TextField, Button, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../splash/Logo';

const Container = styled(Box)`
  min-height: 100vh;
   background-color:rgb(21, 21, 21);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContentBox = styled(Box)`
  background-color: #000000;
  border: 1px solid #333;
  border-radius: 16px;
  padding: 24px;
  width: 90%;
  max-width: 400px;
`;

const Content = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoWrapper = styled(Box)`
  width: 60px;
  height: 60px;
  margin: 20px 0 8px;
`;

const Title = styled(Typography)`
  color: white;
  font-size: 20px;
  margin-bottom: 4px;
`;

const Form = styled(Box)`
  width: 100%;
  max-width: 360px;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Description = styled(Typography)`
  color: #666;
  font-size: 14px;
  margin-bottom: 20px;
`;

const StyledTextField = styled(TextField)`
  width: 100%;
  margin-bottom: 12px;
  
  & .MuiOutlinedInput-root {
    background-color: #1E1E1E;
    border-radius: 8px;
    color: white;
    height: 40px;
    
    & fieldset {
      border-color: transparent;
    }
    
    &:hover fieldset {
      border-color: rgba(255, 255, 255, 0.2);
    }
    
    &.Mui-focused fieldset {
      border-color: #8B8BFF;
    }
  }

  & input {
    padding: 8px 14px;
  }
`;

const ContinueButton = styled(Button)`
  width: 40%;
  height: 36px;
  background-color: white;
  color: black;
  border-radius: 8px;
  text-transform: none;
  font-size: 14px;
  margin: 12px 0;
  
  &:hover {
    background-color: #E0E0E0;
  }
  
  &.Mui-disabled {
    background-color: #333;
    color: #666;
  }
`;

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  
  const isEmailValid = () => {
    return email.length > 0 && email.includes('@');
  };

  return (
    <Container>
      <ContentBox>
        <Content>
        <LogoWrapper>
            <img src="/logos/logo.png" alt="ThirdAI Logo" style={{ width: '100%', height: '100%' }}/>
          </LogoWrapper>
          <Title>The AI Universe</Title>
          <Typography variant="h6" color="white" sx={{ mb: 2 }}>
            Reset your password
          </Typography>
          
          <Form>
            <Description>
              Enter your email address and we will send you instruction to reset your password
            </Description>
            
            <StyledTextField
              placeholder="Enter your email address"
              type="email"
              value={email}
              onChange={handleChange}
              fullWidth
            />
            
            <ContinueButton
              variant="contained"
              disabled={!isEmailValid()}
            >
              Continue
            </ContinueButton>
          </Form>
        </Content>
      </ContentBox>
    </Container>
  );
};

export default ResetPassword; 