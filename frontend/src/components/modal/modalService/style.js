import styled, { keyframes } from 'styled-components';
import { colors } from '../../../settings/colors/colors';
import CloseIcon from '@mui/icons-material/Close';

const slideIn = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const ModalContent = styled.div`
  background: ${colors.white};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 25px;
  width: 500px;
  animation: ${slideIn} 0.3s ease;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${colors.light};
  margin-bottom: 20px;
  padding-bottom: 10px;
`;

export const Close = styled(CloseIcon)`
  cursor: pointer;
  font-size: 24px;
  color: ${colors.primary};
`;

export const Text = styled.div`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 30px;
  color: ${colors.primaryDark};
`;

export const Button = styled.button`
  font-size: 16px;

  background-color: ${props => props.disabled ? colors.strongGray : colors.primary};
  color: ${colors.white};
  border: none;
  padding: 12px 24px;
  box-shadow: 0 4px 10px rgba(0, 153, 92, 0.6);
  border-radius: 10px;
  font-family: 'Nunito', sans-serif;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: ${props => props.disabled ? "" : "0 8px 15px rgba(0, 153, 92, 0.6)"};
  }

  &:active {
    background-color: ${colors.primaryLight};
    transition: background-color 0.3s ease;
  }

  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
`;