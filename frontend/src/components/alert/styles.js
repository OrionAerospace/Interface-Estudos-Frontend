import styled, { css, keyframes } from 'styled-components';
import { colors } from '../../settings/colors/colors';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

export const AlertContainer = styled.div`
  animation: ${props => props.show ? fadeIn : fadeOut} 0.5s ease forwards;
  padding: 15px;
  margin: 10px 0;
  border-radius: 5px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;

  ${props => props.type === 'error' && css`
    background-color: ${colors.error};
    box-shadow: 0 0 10px 1px ${colors.error};
  `}

  ${props => props.type === 'warning' && css`
    background-color: ${colors.warning};
    box-shadow: 0 0 10px 1px ${colors.warning};
  `}

  ${props => props.type === 'info' && css`
    background-color: ${colors.info};
    box-shadow: 0 0 10px 1px ${colors.info};
  `}

  ${props => props.type === 'success' && css`
    background-color: ${colors.success};
    box-shadow: 0 0 10px 1px ${colors.success};
  `}
`;
