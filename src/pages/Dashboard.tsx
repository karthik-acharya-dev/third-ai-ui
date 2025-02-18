import React from 'react';
import { Box, Typography, Grid, Paper, styled } from '@mui/material';
import { TrendingUp, People, Assessment, Timeline } from '@mui/icons-material';

const StyledPaper = styled(Paper)`
  padding: 20px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const StatIcon = styled(Box)`
  background-color: #1a1a1a;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
`;

const Dashboard: React.FC = () => {
  const stats = [
    { title: 'Total Users', value: '1,234', icon: <People /> },
    { title: 'Revenue', value: '$45,678', icon: <TrendingUp /> },
    { title: 'Conversion Rate', value: '12.3%', icon: <Assessment /> },
    { title: 'Active Sessions', value: '456', icon: <Timeline /> },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        {stats.map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.title}>
            <StyledPaper>
              <StatIcon>
                {stat.icon}
              </StatIcon>
              <Typography variant="h6" gutterBottom>
                {stat.title}
              </Typography>
              <Typography variant="h4" color="primary">
                {stat.value}
              </Typography>
            </StyledPaper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard; 