import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import Logo from './Logo';

const SplashContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #000000;
  position: relative;
`;

const StatusBar = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  color: white;
  font-size: 14px;
  font-weight: 500;
`;

const Time = styled(Typography)`
  font-weight: 600;
`;

const StatusIcons = styled(Box)`
  display: flex;
  align-items: center;
  gap: 4px;
  img {
    height: 16px;
    object-fit: contain;
  }
`;

const ContentWrapper = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-top: -60px;
`;

const LogoWrapper = styled(Box)`
  position: relative;
  width: 180px;
  height: 180px;
  margin-bottom: 24px;
`;

const Title = styled(Typography)`
  color: #ffffff;
  font-size: 24px;
  font-weight: 400;
  opacity: 0.9;
  text-align: center;
  animation: fadeIn 1s ease-in-out;
  margin-top: 100px;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 0.9;
      transform: translateY(0);
    }
  }
`;

const SplashScreen: React.FC = () => {
  return (
    <SplashContainer>
   
      <ContentWrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Title>
          The AI Universe made simple
        </Title>
      </ContentWrapper>
    </SplashContainer>
  );
};

export default SplashScreen; 