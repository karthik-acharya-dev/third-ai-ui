import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import MainContent from './components/layout/MainContent';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import OTPVerification from './components/auth/OTPVerification';
import ResetPassword from './components/auth/ResetPassword';
import CheckEmail from './components/auth/CheckEmail';
import LinkExpired from './components/auth/LinkExpired';
import Settings from './pages/Settings';
import Personalization from './pages/Personalization';

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
      <Route path="/personalization" element={<Personalization />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes; 