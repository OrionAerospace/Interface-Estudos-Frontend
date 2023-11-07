import styled from 'styled-components';
import { colors } from '../../settings/colors/colors';

// Estilize o container do menu
export const MenuContainer = styled.div`
  align-items: center;
  background: #fff;
  padding: 10px;
  overflow-x: auto;

  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 20px;
  margin: 20px;
`;

// Estilize cada item do menu
export const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  cursor: pointer;
`;

// Estilize o ícone de cada item do menu
export const MenuIcon = styled.div`
  background: ${(props) => props.bgColor || colors.secondary};
  box-shadow: 0 2px 8px 0 ${(props) => props.bgColor || colors.secondary};
  border-radius: 100%;
  padding: 15px;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
`;

// Estilize o texto de cada item do menu
export const MenuText = styled.div`
  color: ${colors.primaryDark};
  font-size: 14px;
`;