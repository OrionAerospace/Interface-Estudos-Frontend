import React from 'react';
import { Header, MainBanner, CategoryButtons, TopicsCarousel } from './styles';
import Button from '../../components/button';

function Home() {
  return (
    <div>
      <Header>
        <img src="../profile/logo512.png" alt="Logo" />
        {/* Add other header elements here */}
      </Header>
      
      <MainBanner>
        <h1>MATÉRIAS DE EXATAS EXPLICADAS COM A MELHOR DIDÁTICA</h1>
        <p>Do ciclo básico ao ciclo profissional</p>
        <Button label={"Cadastrar"} />
      </MainBanner>

      <CategoryButtons>
        {/* You can map through the categories and display them here */}
      </CategoryButtons>

      <TopicsCarousel>
        {/* Your topics carousel elements go here */}
      </TopicsCarousel>

      {/* Add other components or elements as needed */}
    </div>
  );
}

//Home.propTypes = {};

export default Home;
