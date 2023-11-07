import styled from 'styled-components';
import { colors } from '../../settings/colors/colors';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  background-color: ${colors.primaryDark};
  width: 100%;
  height: 400px;
  text-align: center;
`;

export const Title = styled.h1`
  color: ${colors.white};
`;

export const Subtitle = styled.h2`
  color: ${colors.white};
`;

export const SubjectsContainer = styled.div`
  background-color: ${colors.white};
  border-radius: 10px;
  box-shadow: 0 0 10px ${colors.primaryDark};
  width: 70%;
  position: relative;
  margin-top: -50px;
  margin-bottom: 50px;
  padding: 20px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 20px;
`;

export const SubjectCard = styled.div`
  background-color: ${colors.secondary};
  color: ${colors.white};
  padding: 10px;
  border-radius: 8px;
  width: 200px;
  height: 120px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.5);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const SubjectLink = styled.a`
  color: ${colors.primaryDark};
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  margin: 10px;
  text-align: center;
`;

export const Footer = styled.footer`
  background-color: ${colors.primary};
  width: 100%;
  text-align: center;
  bottom: 0;
`;

export const FooterText = styled.p`
  color: ${colors.white};
`;