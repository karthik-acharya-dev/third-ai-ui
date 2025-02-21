import React from 'react';
import { Box, Button, Typography, styled, IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import Logo from '../splash/Logo';
import { useNavigate } from 'react-router-dom';

const Container = styled(Box)`
  min-height: 100vh;
  background-color: rgb(21, 21, 21);
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
  position: relative;
`;

const Content = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackButton = styled(IconButton)`
  position: absolute;
  top: 20px;
  left: 20px;
  color: white;
  z-index: 1;
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

const Description = styled(Typography)`
  color: #666;
  font-size: 14px;
  margin: 32px 0;
  text-align: center;
`;

const ResendButton = styled(Button)`
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
`;

const CheckEmail = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <BackButton onClick={() => navigate(-1)}>
        <ArrowBack />
      </BackButton>
      <ContentBox>
        <Content>
          <LogoWrapper>
            <img src="/logos/logo.png" alt="ThirdAI Logo" style={{ width: '100%', height: '100%' }}/>
          </LogoWrapper>
          <Title>The AI Universe</Title>
          <Typography variant="h6" color="white" sx={{ mb: 2 }}>
            Check Your Email
          </Typography>
          
          <Description>
            Please check the email address for instructions to reset your password.
          </Description>
          
          <ResendButton variant="contained">
            Resend Email
          </ResendButton>
        </Content>
      </ContentBox>
    </Container>
  );
};

export default CheckEmail; 