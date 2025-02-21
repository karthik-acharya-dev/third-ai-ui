import React from 'react';
import { Box, styled } from '@mui/material';

const LogoContainer = styled(Box)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GlowOrb = styled('img')`
  position: absolute;
  width: 180%;
  height: 180%;
  object-fit: contain;
  animation: pulse 2s infinite ease-in-out;
  
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.8;
    }
    50% {
      transform: scale(1.05);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0.8;
    }
  }
`;

const TransparentLayer = styled('img')`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
  animation: rotate 8s infinite linear;
  
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const MainLogo = styled('img')`
  position: relative;
  width: 90%;
  height: 90%;
  object-fit: contain;
  z-index: 2;
`;

const Logo: React.FC = () => {
  return (
    <LogoContainer>
      <GlowOrb src="/splash-screen/glow orb.png" alt="Glow Effect" />
      <TransparentLayer src="/splash-screen/transparent.png" alt="Transparent Layer" />
      <MainLogo src="/splash-screen/logo.png" alt="ThirdAI Logo" />
    </LogoContainer>
  );
};

export default Logo; 