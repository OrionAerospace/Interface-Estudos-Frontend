import styled from 'styled-components';
import { colors } from '../../../settings/colors/colors';

const FontSize = '16px';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start
  gap: 10px;
  width: 100%;
  margin: 20px 0;
  border-radius: 10px;
`;

export const Input = styled.textarea`
  width: 97%;
  max-width: 97%;
  height: 200px;
  min-height: 30px;
  font-size: ${FontSize};
  border: none;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.3s ease-in-out;

  &::placeholder {
    color: ${colors.strongGray};
  }

  &:hover {
    box-shadow: 0 0 10px 1px ${colors.primaryLight};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 10px 4px ${colors.primaryLight};
  }
`;

export const Label = styled.label`
  font-family: 'Nunito', sans-serif;
  font-size: ${FontSize};
  color: ${colors.dark};
  font-weight: 500;
  margin-bottom: 10px;
`;