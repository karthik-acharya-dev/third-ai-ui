import React, { useState, useEffect } from 'react';
import { Box, Typography, styled, IconButton, Button } from '@mui/material';
import { ArrowBack, CheckCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

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
  height: auto;
  min-height: 500px;
  width: 500px;
  background-color: rgb(18, 18, 18);
  color: white;
  position: relative; 
  overflow-y: auto;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;

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
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px 12px 0 0;
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
  padding: 24px;
  padding-bottom: 80px;
`;

const PlaceholderAvatar = styled(Box)`
  width: 100px;
  height: 100px;
  margin: 0 auto 32px;
  background-color: rgba(32, 33, 35, 0.6);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: all 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Label = styled(Typography)`
  color: #666;
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

const AvatarGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 32px;
  max-width: 400px;
  margin: 0 auto;
`;

const AvatarOption = styled(Box)<{ selected?: boolean }>`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  max-width: 90px;
  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
`;

const CheckIcon = styled(CheckCircle)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 32px;
  z-index: 2;
`;

const SelectionOverlay = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SaveButtonContainer = styled(Box)`
  position: sticky;
  bottom: 0;
  width: 100%;
  padding: 16px;
  background-color: rgb(18, 18, 18);
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0 0 12px 12px;
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

const avatars = [
  '/user-avatar/User Avatar.png',
  '/user-avatar/User 02c (2).png',
  '/user-avatar/User 02c (3).png',
  '/user-avatar/User 02c (4).png',
  '/user-avatar/User 02c (5).png',
  '/user-avatar/User 02c (6).png',
];

interface EditAvatarProps {
  onClose: () => void;
}

const EditAvatar: React.FC<EditAvatarProps> = ({ onClose }) => {
  const [selectedAvatar, setSelectedAvatar] = useState(avatars[1]);
  const [currentAvatar, setCurrentAvatar] = useState('/user-avatar/User Avatar (3).png');

  useEffect(() => {
    setCurrentAvatar(selectedAvatar);
  }, [selectedAvatar]);

  const handleSave = () => {
    // Implement avatar change logic here
    onClose();
  };

  return (
    <Overlay onClick={onClose}>
      <Container onClick={e => e.stopPropagation()}>
        <Header>
          <BackButton onClick={onClose}>
            <ArrowBack />
          </BackButton>
          <HeaderTitle>Edit Profile Picture</HeaderTitle>
        </Header>

        <Content>
          <PlaceholderAvatar>
            <img src={currentAvatar} alt="Current Avatar" />
          </PlaceholderAvatar>

          <Label>Pick Avatar</Label>
          <AvatarGrid>
            {avatars.map((avatar, index) => (
              <AvatarOption
                key={index}
                onClick={() => setSelectedAvatar(avatar)}
              >
                <img src={avatar} alt={`Avatar ${index + 1}`} />
                {avatar === selectedAvatar && (
                  <SelectionOverlay>
                    <CheckIcon />
                  </SelectionOverlay>
                )}
              </AvatarOption>
            ))}
          </AvatarGrid>
        </Content>

        <SaveButtonContainer>
          <SaveButton variant="contained" onClick={handleSave}>
            Save
          </SaveButton>
        </SaveButtonContainer>
      </Container>
    </Overlay>
  );
};

export default EditAvatar; 