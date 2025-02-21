import React, { useState } from 'react';
import { Box, Typography, styled, IconButton } from '@mui/material';
import { 
  ArrowBack, 
  Edit,
  Person,
  Email,
  Work,
  Description,
  Storage,
  Article,
  Shield,
  PlayCircle,
  Logout,
  DeleteOutline,
  ChevronRight
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../components/ConfirmationModal';
import EditProfile from './EditProfile';
import EditEmail from './EditEmail';
import ChangePassword from './ChangePassword';
import EditAvatar from './EditAvatar';

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

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
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
  padding: 0;
`;

const Section = styled(Box)`
  margin-bottom: 24px;
`;

const SectionTitle = styled(Typography)`
  color: #666;
  font-size: 13px;
  font-weight: 400;
  padding: 16px;
  letter-spacing: 0.5px;
`;

const AccountCard = styled(Box)`
  padding: 16px;
  position: relative;
`;

const AvatarSection = styled(Box)`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`;

const Avatar = styled(Box)`
  width: 80px;
  height: 80px;
  border-radius: 12px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const UserInfoSection = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const UserInfoRow = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;

  & .MuiSvgIcon-root {
    color: #666;
    font-size: 20px;
  }
`;

const UserText = styled(Typography)`
  font-size: 15px;
  color: white;
`;

const EditButton = styled(IconButton)`
  position: absolute;
  right: 16px;
  top: 16px;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 8px;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  & .MuiSvgIcon-root {
    font-size: 20px;
    color: white;
  }
`;

const MembershipInfo = styled(Typography)`
  color: #666;
  font-size: 14px;
  padding: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

interface MenuItemProps {
  hasBorder?: boolean;
}

const MenuItem = styled(Box)<MenuItemProps>`
  display: flex;
  align-items: center;
  padding: 16px;
  cursor: pointer;
  position: relative;
  border-bottom: ${props => props.hasBorder ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'};

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  & .MuiSvgIcon-root {
    color: #666;
    margin-right: 12px;
    font-size: 20px;
  }
`;

interface MenuTextProps {
  color?: string;
}

const MenuText = styled(Typography)<MenuTextProps>`
  font-size: 15px;
  color: ${props => props.color || 'white'};
`;

const ChevronIcon = styled(ChevronRight)`
  position: absolute;
  right: 16px;
  color: #666;
`;

const VersionText = styled(Typography)`
  color: #666;
  font-size: 13px;
  position: absolute;
  right: 16px;
`;

const Settings = () => {
  const navigate = useNavigate();
  const [clearHistoryOpen, setClearHistoryOpen] = useState(false);
  const [deleteAccountOpen, setDeleteAccountOpen] = useState(false);
  const [editProfileOpen, setEditProfileOpen] = useState(false);
  const [editEmailOpen, setEditEmailOpen] = useState(false);
  const [changePasswordOpen, setChangePasswordOpen] = useState(false);
  const [editAvatarOpen, setEditAvatarOpen] = useState(false);

  const handleClose = () => {
    navigate(-1);
  };

  const handleEditClick = () => {
    setEditProfileOpen(true);
  };

  const handleEditEmailClick = () => {
    setEditEmailOpen(true);
  };

  const handleChangePasswordClick = () => {
    setChangePasswordOpen(true);
  };

  const handlePersonalizationClick = () => {
    navigate('/personalization');
  };

  const handleClearHistoryClick = () => {
    setClearHistoryOpen(true);
  };

  const handleDeleteAccountClick = () => {
    setDeleteAccountOpen(true);
  };

  const handleClearHistory = () => {
    // Implement clear history logic here
    setClearHistoryOpen(false);
  };

  const handleDeleteAccount = () => {
    // Implement delete account logic here
    setDeleteAccountOpen(false);
  };

  const handleEditAvatar = () => {
    setEditAvatarOpen(true);
  };

  return (
    <Overlay onClick={handleClose}>
      <Container onClick={e => e.stopPropagation()}>
        <Header>
          <BackButton onClick={handleClose}>
            <ArrowBack />
          </BackButton>
          <HeaderTitle>Settings</HeaderTitle>
        </Header>

        <Content>
          <Section>
            <SectionTitle>ACCOUNT</SectionTitle>
            <AccountCard>
              <AvatarSection>
                <Avatar 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEditAvatar();
                  }} 
                  style={{ cursor: 'pointer' }}
                >
                  <img src="/user-avatar/User Avatar.png" alt="Adam Scott" />
                </Avatar>
                <UserInfoSection>
                  <UserInfoRow>
                    <Person />
                    <UserText>Adam Scott</UserText>
                  </UserInfoRow>
                  <UserInfoRow>
                    <Email />
                    <UserText>adam.scott@gmail.com</UserText>
                  </UserInfoRow>
                  <UserInfoRow>
                    <Work />
                    <UserText>Software Engineer</UserText>
                  </UserInfoRow>
                </UserInfoSection>
                <EditButton onClick={handleEditClick}>
                  <Edit />
                </EditButton>
              </AvatarSection>
            </AccountCard>
            <MembershipInfo>
              Free Plan
            </MembershipInfo>
            <MenuItem>
              <Description />
              <MenuText>Subscription</MenuText>
              <ChevronIcon />
            </MenuItem>
          </Section>

          <Section>
            <SectionTitle>PREFERENCES</SectionTitle>
            <MenuItem onClick={handlePersonalizationClick}>
              <Person />
              <MenuText>Personalization</MenuText>
              <ChevronIcon />
            </MenuItem>
          </Section>

          <Section>
            <SectionTitle>PRIVACY & SECURITY</SectionTitle>
            <MenuItem onClick={handleEditEmailClick}>
              <Email />
              <MenuText>Change Email</MenuText>
              <ChevronIcon />
            </MenuItem>
            <MenuItem onClick={handleChangePasswordClick}>
              <Shield />
              <MenuText>Change Password</MenuText>
              <ChevronIcon />
            </MenuItem>
            <MenuItem onClick={handleClearHistoryClick}>
              <Storage />
              <MenuText>Clear History</MenuText>
            </MenuItem>
          </Section>

          <Section>
            <SectionTitle>ABOUT</SectionTitle>
            <MenuItem>
              <Article />
              <MenuText>Terms of Use</MenuText>
            </MenuItem>
            <MenuItem>
              <Shield />
              <MenuText>Privacy Policy</MenuText>
            </MenuItem>
            <MenuItem>
              <PlayCircle />
              <MenuText>Third Ai</MenuText>
              <VersionText>v 1.2024.338</VersionText>
            </MenuItem>
          </Section>

          <MenuItem>
            <Logout />
            <MenuText>Log out</MenuText>
          </MenuItem>
          <MenuItem onClick={handleDeleteAccountClick}>
            <DeleteOutline sx={{ color: '#FF4444 !important' }} />
            <MenuText color="#FF4444">Delete Account</MenuText>
          </MenuItem>
        </Content>

        <ConfirmationModal
          open={clearHistoryOpen}
          title="Clear History"
          message="Are you sure you want to clear your history? This action cannot be undone."
          onClose={() => setClearHistoryOpen(false)}
          onConfirm={handleClearHistory}
        />

        <ConfirmationModal
          open={deleteAccountOpen}
          title="Delete Account"
          message="Are you sure you want to delete your account? All your data will be deleted and subscription will be canceled."
          onClose={() => setDeleteAccountOpen(false)}
          onConfirm={handleDeleteAccount}
        />

        {editAvatarOpen && (
          <EditAvatar onClose={() => setEditAvatarOpen(false)} />
        )}

        {editProfileOpen && (
          <EditProfile onClose={() => setEditProfileOpen(false)} />
        )}

        {editEmailOpen && (
          <EditEmail onClose={() => setEditEmailOpen(false)} />
        )}

        {changePasswordOpen && (
          <ChangePassword onClose={() => setChangePasswordOpen(false)} />
        )}
      </Container>
    </Overlay>
  );
};

export default Settings; 