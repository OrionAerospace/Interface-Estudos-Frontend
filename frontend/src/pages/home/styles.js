import styled from 'styled-components';
import { colors } from '../../settings/colors/colors';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 50px;
  background-color: ${colors.primaryDark};
  
  img {
    height: 50px; // Suposição de tamanho. Ajuste conforme necessário.
  }
`;

export const MainBanner = styled.section`
  padding: 100px 50px;
  background-color: ${colors.primaryDark};
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h1 {
    font-size: 2em;
    color: ${colors.light};
    text-align: center;
    margin-bottom: 20px;
  }
  
  p {
    color: ${colors.light};
    margin-bottom: 40px;
  }
`;

export const CategoryButtons = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 50px;
`;

export const TopicsCarousel = styled.section`
  padding: 50px;
  display: flex;
  justify-content: space-between;
  overflow-x: scroll;
  
  // Estilo básico para itens individuais no carrossel.
  // Adicione mais estilos ou componentes conforme necessário.
  div {
    flex: 0 0 auto;
    width: 250px; // Suposição de tamanho.
    height: 300px; 
    background-color: ${colors.light};
    margin-right: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      font-size: 1.5em;
    }

    p {
      color: ${colors.secondary};
    }
  }
`;

