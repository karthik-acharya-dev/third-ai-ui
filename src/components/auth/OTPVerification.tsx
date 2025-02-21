import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, styled, TextField } from '@mui/material';
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
  text-align: center;
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

const ResendLink = styled(Button)`
  color: white;
  text-transform: none;
  font-size: 12px;
  padding: 4px 0;
  margin-top: 8px;
  
  &:hover {
    background: none;
    text-decoration: underline;
  }
`;

const OTPVerification = () => {
  const [code, setCode] = useState('');
  const [isValid, setIsValid] = useState(false);
  const email = 'mail@yopmail.com'; // This should come from your app state/route params
  
  useEffect(() => {
    setIsValid(code.length === 6);
  }, [code]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    if (value.length <= 6) {
      setCode(value);
    }
  };
  
  return (
    <Container>
      <ContentBox>
        <Content>
        <LogoWrapper>
            <img src="/logos/logo.png" alt="ThirdAI Logo" style={{ width: '100%', height: '100%' }}/>
          </LogoWrapper>
          <Title>The AI Universe</Title>
          
          <Form>
            <Description>
              Enter the verification code we just sent to<br />
              {email}
            </Description>
            
            <StyledTextField
              placeholder="Code"
              value={code}
              onChange={handleChange}
              fullWidth
              inputProps={{
                maxLength: 6,
                inputMode: 'numeric',
                pattern: '[0-9]*'
              }}
            />
            
            <ContinueButton
              variant="contained"
              disabled={!isValid}
            >
              Continue
            </ContinueButton>
            
            <Box display="flex" justifyContent="center">
              <ResendLink>
                Resend email
              </ResendLink>
            </Box>
          </Form>
        </Content>
      </ContentBox>
    </Container>
  );
};

export default OTPVerification; 