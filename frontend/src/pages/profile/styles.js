import styled from 'styled-components';
import { colors } from '../../settings/colors/colors';

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: ${colors.secondary};
    background-size: 48px 48px;
    background-image:  repeating-linear-gradient(0deg, ${colors.secondary}, ${colors.secondary} 1.8px, ${colors.light} 1.8px, ${colors.light});
`;

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 30px auto;
  padding: 20px;
  background-color: ${colors.light};
  border-radius: 20px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.40);
`;

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: top;
  justify-content: space-between;
`;

export const ProfilePic = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 20px;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
`;

export const Name = styled.h1`
  font-size: 24px;
  margin-bottom: 5px;
`;

export const Info = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const StatItem = styled.div`
  width: 23%;
  padding: 10px;
  border-radius: 8px;
  background-color: ${colors.primaryLight};
  text-align: center;

  p {
    font-size: 14px;
    margin-bottom: 5px;
  }

  h2 {
    font-size: 22px;
    color: ${colors.primary};
  }
`;

// Você pode continuar adicionando mais estilos conforme necessário.
