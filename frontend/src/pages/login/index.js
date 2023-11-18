import React from 'react';
import { Container, LeftSection, RightSection, Label, Input } from './styles';
import Button from '../../components/button';
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <LeftSection>
        <h2>ORION</h2>
        <p>Ainda não tem uma conta?</p>
        <p>Crie uma conta para acessar seus resultados!</p>
        <Button label={"Cadastrar"} onClick={()=>navigate("/cadastro")}/>
      </LeftSection>
      <RightSection>
        <Label>Login</Label>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Senha" />
        <Button label={"Entrar"} />
      </RightSection>
    </Container>
  );
};

//Login.propTypes = {};

export default Login;
