import React, { useState } from 'react';
import { Box, Typography, styled, IconButton, TextField, Button } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Overlay = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1200;
`;

const Container = styled(Box)`
  height: 100vh;
  width: 900px;
  background-color: rgba(0, 0, 0, 0.95);
  color: white;
  position: relative;
  overflow-y: auto;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
  }
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
  margin-right: 16px;
  padding: 8px;
`;

const HeaderTitle = styled(Typography)`
  font-size: 16px;
  font-weight: 400;
`;

const Content = styled(Box)`
  padding: 24px;
  padding-bottom: 80px;
`;

const Section = styled(Box)`
  margin-bottom: 24px;
`;

const SectionTitle = styled(Typography)`
  color: #666;
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

const StyledTextField = styled(TextField)`
  width: 100%;
  margin-bottom: 24px;
  
  & .MuiOutlinedInput-root {
    background-color: rgba(32, 33, 35, 0.6);
    border-radius: 8px;
    color: white;
    
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

  & .MuiInputLabel-root {
    color: #666;
  }
`;

const SaveButtonContainer = styled(Box)`
  position: fixed;
  bottom: 0;
  width: 900px;
  padding: 16px;
  background-color: rgb(18, 18, 18);
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const SaveButton = styled(Button)`
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

const Personalization = () => {
  const navigate = useNavigate();
  const [instructions, setInstructions] = useState('');

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <Overlay onClick={handleClose}>
      <Container onClick={e => e.stopPropagation()}>
        <Header>
          <BackButton onClick={handleClose}>
            <ArrowBack />
          </BackButton>
          <HeaderTitle>Personalization</HeaderTitle>
        </Header>

        <Content>
          <Section>
            <SectionTitle>CUSTOM INSTRUCTIONS</SectionTitle>
            <StyledTextField
              multiline
              rows={8}
              placeholder="Write here"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              fullWidth
            />
            <Typography variant="body2" color="#666" sx={{ mb: 4 }}>
              Tell us about yourself so ThirdAI can give better responses.
            </Typography>
          </Section>
        </Content>

        <SaveButtonContainer>
          <SaveButton variant="contained" onClick={handleClose}>
            Save
          </SaveButton>
        </SaveButtonContainer>
      </Container>
    </Overlay>
  );
};

export default Personalization; 