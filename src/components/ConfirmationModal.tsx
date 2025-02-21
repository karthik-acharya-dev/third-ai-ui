import React from 'react';
import { Box, Typography, Button, styled } from '@mui/material';

const Overlay = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1300;
`;

const Container = styled(Box)`
  background-color: rgb(32, 33, 35);
  border-radius: 12px;
  padding: 24px;
  width: 320px;
  color: white;
  text-align: center;
`;

const Title = styled(Typography)`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 16px;
`;

const Message = styled(Typography)`
  font-size: 14px;
  color: #999;
  margin-bottom: 24px;
`;

const ButtonContainer = styled(Box)`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

const CancelButton = styled(Button)`
  width: 120px;
  height: 36px;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  text-transform: none;
  border-radius: 8px;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
`;

const ConfirmButton = styled(Button)`
  width: 120px;
  height: 36px;
  background-color: white;
  color: black;
  text-transform: none;
  border-radius: 8px;
  
  &:hover {
    background-color: #E0E0E0;
  }
`;

interface ConfirmationModalProps {
  open: boolean;
  title: string;
  message: string;
  onClose: () => void;
  onConfirm: () => void;
  confirmText?: string;
  showCancel?: boolean;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  open,
  title,
  message,
  onClose,
  onConfirm,
  confirmText = 'Confirm',
  showCancel = true,
}) => {
  if (!open) return null;

  return (
    <Overlay onClick={onClose}>
      <Container onClick={(e) => e.stopPropagation()}>
        <Title>{title}</Title>
        <Message>{message}</Message>
        <ButtonContainer>
          {showCancel && (
            <CancelButton onClick={onClose}>
              Cancel
            </CancelButton>
          )}
          <ConfirmButton 
            variant="contained" 
            onClick={onConfirm}
            sx={{ width: showCancel ? '120px' : '100px' }}
          >
            {confirmText}
          </ConfirmButton>
        </ButtonContainer>
      </Container>
    </Overlay>
  );
};

export default ConfirmationModal; 