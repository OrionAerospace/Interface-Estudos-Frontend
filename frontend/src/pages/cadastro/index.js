import React, { useState } from 'react';
//import PropTypes from 'prop-types';
import { Container, LeftSection, RightSection, Label, Input } from './styles';
import Button from '../../components/button';
import axios from 'axios';

const Cadastro = () => {

  const [formData, setFormData] = useState({
    name: '',
    username:'',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    sendDataToAPI({...formData, username:formData.name});
  };

  const sendDataToAPI = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/users',data);

      if (response.error) {
        console.error('Erro ao cadastrar o usuário');
      } else {
        console.log('Usuário cadastrado com sucesso!');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

  return (
    <Container>
      <LeftSection>
        <h2>ORION</h2>
        <p>Já tem uma conta?</p>
        <p>Entre em sua conta para checar seus resultados!</p>
        <Button label={"Entrar"} />
      </LeftSection>
      <RightSection onSubmit={handleSubmit}>
        <Label>Criar Conta</Label>
        <Input 
          type="email" 
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          />
        <Input 
          type="text"
          name="name"
          placeholder="Nome"
          value={formData.username}
          onChange={handleChange} />
        <Input
          type="password"
          name="password"
          placeholder="Senha"
          value={formData.password}
          onChange={handleChange}
          />
        <Input type="date" placeholder="Data de Nascimento" />
        <Input type="text" placeholder="RA" />
        <Button label={"Cadastrar"} type="submit" />
      </RightSection>
    </Container>
  );
};

//Cadastro.propTypes = {};

export default Cadastro;
