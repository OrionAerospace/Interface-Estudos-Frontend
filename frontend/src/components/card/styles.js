import styled from 'styled-components';
import { colors } from '../../settings/colors/colors';

export const Container = styled.div`
  flex: 0 1 calc(25% - 20px);
  margin: 5px;
  margin-top: 10px;
  background: ${colors.white};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  padding-top: 38px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  transition: transform 0.2s;
  position: relative;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardTitle = styled.div`
  background: linear-gradient(to right, ${(props) => props.color}, ${(props) => props.colorDark}); 
  color: ${colors.white};
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  font-family: 'Bebas Neue', sans-serif;
  font-size: 25px;
  margin: 15px;
  padding: 5px;
  position: absolute;
  text-align: center;
  top: -35px;
  left: 0;
  right: 0;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  button {
    background: ${colors.primary};
    color: ${colors.white};
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.2s ease;

    & + button {
      margin-left: 10px;
    }
  }
`;