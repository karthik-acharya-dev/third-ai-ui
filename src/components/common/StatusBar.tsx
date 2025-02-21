import React from 'react';
import { Box, Typography, styled } from '@mui/material';

const StatusBarContainer = styled(Box)`
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

const StatusBar = () => {
  return (
    <StatusBarContainer>
      <Time>9:41</Time>
      <StatusIcons>
        <img src="/splash-screen/cellular.png" alt="cellular" />
        <img src="/splash-screen/wifi.png" alt="wifi" />
        <img src="/splash-screen/battery.png" alt="battery" />
      </StatusIcons>
    </StatusBarContainer>
  );
};

export default StatusBar; 