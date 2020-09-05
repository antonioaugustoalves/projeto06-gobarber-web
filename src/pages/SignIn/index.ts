import React from 'react';
import { Container, Content, Background } from './styles';
import { FiLogIn } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
//import Button from '../../components/Button';
//import Input from '../../components/Input';


const SignIn: React.FC = () => (
  <Container>
    <Content>
        <img src={logoImg} alt="Go Barber"/>
        <form>
            <h1>Faça o seu logon:</h1>
            <input name="email" placeholder="Digite o seu E-mail:"/>
            <input name="password" type="password" placeholder="Digite sua senha:"/>
            <button type="submit">Logar-se</Button>
            <a href="forgot">Esqueci a senha</a>
        </form>
        <a href="">
            <FiLogIn/>
            Criar conta
            </a>
    </Content>
    <Background/>
  </Container>
);

export default SignIn;
