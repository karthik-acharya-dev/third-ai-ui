import React, { useState } from 'react';
import { Box, TextField, Button, Typography, styled, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Logo from '../splash/Logo';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';

const Container = styled(Box)`
  min-height: 100vh;
  background-color:rgb(21, 21, 21);
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
  margin-bottom: 4px;
`;

const Form = styled(Box)`
  width: 100%;
  max-width: 360px;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTextField = styled(TextField)`
  width: 100%;
  margin-bottom: 12px;
  
  & .MuiOutlinedInput-root {
    background-color: #1E1E1E;
    border-radius: 8px;
    color: white;
    height: 40px;
    
    & fieldset {
      border-color: transparent;
    }
    
    &:hover fieldset {
      border-color: rgba(255, 255, 255, 0.2);
    }
    
    &.Mui-focused fieldset {
      border-color: #8B8BFF;
    }
  }
  
  & .MuiInputLabel-root {
    color: #666;
  }
  
  & .MuiInputAdornment-root {
    color: #666;
  }

  & input {
    padding: 8px 14px;
  }
`;

const SignInButton = styled(Button)`
  width: 40%;
  height: 36px;
  background-color: white;
  color: black;
  border-radius: 8px;
  text-transform: none;
  font-size: 14px;
  margin: 12px 0;
  
  &:hover {
    background-color: #E0E0E0;
  }
  
  &.Mui-disabled {
    background-color: #333;
    color: #666;
  }
`;

const ForgotPassword = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 12px;
  display: block;
  text-align: right;
  margin-top: -4px;
  margin-bottom: 12px;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Divider = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 16px 0;
  color: #666;
  
  &::before, &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #333;
  }
  
  & span {
    margin: 0 16px;
    font-size: 14px;
  }
`;

const SocialButton = styled(Button)`
  width: 40px;
  height: 40px;
  min-width: 40px;
  border-radius: 8px;
  background-color: #1E1E1E;
  margin: 0 8px;
  
  &:hover {
    background-color: #2A2A2A;
  }
  
  & .MuiSvgIcon-root {
    color: white;
    font-size: 20px;
  }
`;

const BottomText = styled(Box)`
  color: #666;
  margin-top: 16px;
  text-align: center;
  font-size: 14px;
  
  & a {
    color: white;
    text-decoration: none;
    margin-left: 8px;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const isFormValid = () => {
    const { email, password } = formData;
    return email.length > 0 && 
           email.includes('@') && 
           password.length >= 6;
  };

  return (
    <Container>
      <ContentBox>
        <Content>
        <LogoWrapper>
            <img src="/logos/logo.png" alt="ThirdAI Logo" style={{ width: '100%', height: '100%' }}/>
          </LogoWrapper>
          <Title>The AI Universe</Title>
          <Typography variant="h6" color="white" sx={{ mb: 2 ,mt:2}}>
            Welcome back
          </Typography>
          
          <Form>
            <StyledTextField
              placeholder="Enter your email address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
            />
            <StyledTextField
              placeholder="Enter your password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleChange}
              fullWidth
              InputProps={{
                endAdornment: (
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                    sx={{ color: '#666' }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
            />
            
            <ForgotPassword to="/reset-password">
              Forgot Password?
            </ForgotPassword>
            
            <SignInButton
              variant="contained"
              disabled={!isFormValid()}
            >
              Sign In
            </SignInButton>
            
            <Divider>
              <span>or sign in with</span>
            </Divider>
            
            <Box display="flex" justifyContent="center">
              <SocialButton>
                <GoogleIcon />
              </SocialButton>
              <SocialButton>
                <AppleIcon />
              </SocialButton>
            </Box>
            
            <BottomText>
              Don't have an account?
              <Link to="/register">Sign Up</Link>
            </BottomText>
          </Form>
        </Content>
      </ContentBox>
    </Container>
  );
};

export default Login; 