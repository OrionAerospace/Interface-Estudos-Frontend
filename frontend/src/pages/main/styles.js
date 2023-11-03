import styled from 'styled-components';
import { colors } from '../../settings/colors/colors';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${colors.light};
  height: 100vh;
`;

export const SideNav = styled.nav`
  width: 3vw;
  background-color: ${colors.primaryDark};
  opacity: 0.8;
  padding: 20px;
  border-radius: 0px 30px 30px 0px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  width: 90vw;
  height: 10vh;
  position: fixed;
  margin-left: 6vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const Content = styled.div`
  width: 97vw;
  height: 90vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;


export const SearchBar = styled.input.attrs({ type: 'text' })`
  width: 80%;
  padding: 10px;
  border-radius: 4px;
  border: none;
  margin-top: 10px;
`;

export const CategoryCard = styled.div`
  width: 20%;
  height: 15%;
  background-color: #2c3e50;
  margin: 10px;
  border-radius: 4px;
  padding: 10px;
  color: #ecf0f1;
  
  h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    margin-bottom: 5px;
  }
`;

export const UserIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ecf0f1;
  margin-right: 20px;
`;

export const PlusIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #2980b9;
  color: #ecf0f1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

// E continue adicionando outros componentes estilizados conforme necessário
