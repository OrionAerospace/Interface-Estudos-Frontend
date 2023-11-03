import React from 'react';
import { Container, ProfileContainer, ProfileHeader, Stats, StatItem, ProfilePic, ProfileInfo, Name, Info } from './styles';

const Profile = () => {
  return (
    <Container>
      <ProfileContainer>
        <ProfileHeader>
          <ProfileInfo>
            <Name>[Nome do usuário]</Name>
            <Info>Seu Curso</Info>
            <Info>Cidade</Info>
            <Info>Escola/Universidade</Info>
            <Info>Curso</Info>
          </ProfileInfo>
          <ProfilePic src="logo512.png" alt="Foto de perfil" />
        </ProfileHeader>
        
        <Stats>
          <StatItem>
            <p>Pré-cálculo</p>
            <h2>76%</h2>
          </StatItem>
          <StatItem>
            <p>Limites</p>
            <h2>33%</h2>
          </StatItem>
          <StatItem>
            <p>Derivadas</p>
            <h2>71%</h2>
          </StatItem>
          <StatItem>
            <p>Integrais</p>
            <h2>68%</h2>
          </StatItem>
        </Stats>
        
        <h2>Conquistas</h2>
        {/* Aqui você pode listar as conquistas do usuário */}
      </ProfileContainer>
    </Container>
  );
}

//Profile.propTypes = {};

export default Profile;
