import React from 'react';
import { MainContainer, SearchBar, CategoryCard, UserIcon, PlusIcon, SideNav, Header, Content } from './styles.js';

const Main = () => {
  return (
    <MainContainer>
      <SideNav>
        {/* Add your side navigation items here */}
      </SideNav>

      <Header>
        <h1>ORION</h1>
        <SearchBar placeholder="Pesquisa" />
        <UserIcon src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
      </Header>

      <Content>
        {/* This is just a sample; you might loop through your data to generate these cards dynamically */}
        <CategoryCard>
          <h2>Cálculo</h2>
          <p>Matemática Básica</p>
          <p>Assuntos: Álgebra e Geometria, ...</p>
        </CategoryCard>

        <PlusIcon />
      </Content>

      {/* Add other components or JSX elements as needed */}
    </MainContainer>
  );
}

//Main.propTypes = {};

export default Main;
