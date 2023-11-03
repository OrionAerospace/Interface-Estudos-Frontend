import React from 'react';
//import PropTypes from 'prop-types';
import { Container, LeftSection, RightSection, Label, Input } from './styles';
import Button from '../../components/button';

const Cadastro = () => {
  return (
    <Container>
      <LeftSection>
        <h2>ORION</h2>
        <p>Já tem uma conta?</p>
        <p>Entre em sua conta para checar seus resultados!</p>
        <Button label={"Entrar"} />
      </LeftSection>
      <RightSection>
        <Label>Criar Conta</Label>
        <Input type="email" placeholder="Email" />
        <Input type="text" placeholder="Nome" />
        <Input type="password" placeholder="Senha" />
        <Input type="date" placeholder="Data de Nascimento" />
        <Input type="text" placeholder="RA" />
        <Button label={"Cadastrar"} />
      </RightSection>
    </Container>
  );
};

//Cadastro.propTypes = {};

export default Cadastro;
