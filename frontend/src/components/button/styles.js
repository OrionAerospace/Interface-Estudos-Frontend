import styled from 'styled-components';
import { colors } from '../../settings/colors/colors';

export const TextButton = styled.button`
  background-color: ${colors.primary};
  color: ${colors.white};
  border: none;
  padding: 12px 24px;
  box-shadow: 0 2px 10px ${colors.primary}80;
  border-radius: 10px;
  transition: all 0.3s ease;
  font-weight: 500;
  text-transform: uppercase;

  &:hover {
    box-shadow: 0 4px 15px ${colors.primary}90;
  }

  &:active {
    background-color: ${colors.primaryLight};
    transition: background-color 0.3s ease;
  }

  cursor: pointer;
`;