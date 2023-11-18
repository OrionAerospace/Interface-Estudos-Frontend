import React from 'react';
import {PageContainer, Header, Title, Subtitle, SubjectsContainer, CardsContainer, SubjectCard, SubjectLink, Footer, FooterText } from './styles';
import Button from '../../components/button';
import Carousel from '../../components/carousel';

function Home() {
  return (
    <>
      <PageContainer>
        <Header>
          <Title>Interface de Estudos de Cálculo</Title>
          <Subtitle>Aprenda cálculo, física e muito mais!</Subtitle>
          <Button label={"Cadastrar"}></Button>
        </Header>
        <SubjectsContainer>
          <Carousel />
          <CardsContainer>
            <SubjectCard>Cálculo</SubjectCard>
            <SubjectCard>Física</SubjectCard>
            <SubjectCard>Química</SubjectCard>
            <SubjectCard>Álgebra Linear</SubjectCard>
            <SubjectCard>Geometria Analítica</SubjectCard>
          </CardsContainer>
          <SubjectLink href='/login'>Ver mais assuntos de Cálculo</SubjectLink>
        </SubjectsContainer>
        <Footer>
          <FooterText>Feito em 2023 | UTFPR PG</FooterText>
        </Footer>
      </PageContainer>
    </>
  );
}

//Home.propTypes = {};

export default Home;
