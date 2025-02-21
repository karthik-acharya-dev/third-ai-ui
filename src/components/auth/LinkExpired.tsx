import React from 'react';
import { Box, Button, Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

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
  margin-bottom: 24px;
`;

const IconWrapper = styled(Box)`
  width: 64px;
  height: 64px;
  background-color: #333;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 24px 0;

  & .MuiSvgIcon-root {
    font-size: 32px;
    color: white;
  }
`;

const Description = styled(Typography)`
  color: #666;
  font-size: 14px;
  text-align: center;
  margin-bottom: 24px;
`;

const BackToLoginButton = styled(Button)`
  width: 40%;
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

const LinkExpired = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <ContentBox>
        <Content>
          <LogoWrapper>
            <img src="/logos/logo.png" alt="ThirdAI Logo" style={{ width: '100%', height: '100%' }}/>
          </LogoWrapper>
          <Title>The AI Universe</Title>
          
          <IconWrapper>
            <CloseIcon />
          </IconWrapper>
          
          <Typography variant="h6" color="white" sx={{ mb: 2 }}>
            Link Expired
          </Typography>
          
          <Description>
            To reset your password, return to the login page and select "Forgot Password" to send a new email.
          </Description>
          
          <BackToLoginButton
            variant="contained"
            onClick={() => navigate('/login')}
          >
            Back to Login
          </BackToLoginButton>
        </Content>
      </ContentBox>
    </Container>
  );
};

export default LinkExpired; 