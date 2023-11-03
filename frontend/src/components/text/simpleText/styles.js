import styled from 'styled-components';

export const Text = styled.div`
  font-family: 'Nunito', sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: ${(props) => props.color};
`;