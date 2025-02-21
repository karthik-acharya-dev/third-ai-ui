import React from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import OTPVerification from './components/auth/OTPVerification';
import ResetPassword from './components/auth/ResetPassword';
import CheckEmail from './components/auth/CheckEmail';
import LinkExpired from './components/auth/LinkExpired';
import Settings from './pages/Settings';
import Personalization from './pages/Personalization';
import Layout from './components/layout/Layout';
import MainContent from './components/layout/MainContent';
import EditAvatar from './pages/EditAvatar';
import EditEmail from './pages/EditEmail';
import ChangePassword from './pages/ChangePassword';

// Wrapper components to provide onClose prop
const EditAvatarWrapper = () => {
  const navigate = useNavigate();
  return <EditAvatar onClose={() => navigate(-1)} />;
};

const EditEmailWrapper = () => {
  const navigate = useNavigate();
  return <EditEmail onClose={() => navigate(-1)} />;
};

const ChangePasswordWrapper = () => {
  const navigate = useNavigate();
  return <ChangePassword onClose={() => navigate(-1)} />;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={
        <Layout>
          <MainContent />
        </Layout>
      } />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/verify" element={<OTPVerification />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/check-email" element={<CheckEmail />} />
      <Route path="/link-expired" element={<LinkExpired />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/edit-avatar" element={<EditAvatarWrapper />} />
      <Route path="/edit-email" element={<EditEmailWrapper />} />
      <Route path="/change-password" element={<ChangePasswordWrapper />} />
      <Route path="/personalization" element={<Personalization />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes; 