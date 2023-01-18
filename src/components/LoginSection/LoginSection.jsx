import React from "react";
import { Main } from "../Hero/styles";
import {
  ActionButton,
  Container,
  FieldInput,
  FieldName,
  Form,
  Line,
  LoginTitle,
  MainWrapper,
} from "./styles";

const LoginSection = () => {
  return (
    <Main style={{ backgroundColor: "#f6d53b" }}>
      <MainWrapper>
        <Container>
          <LoginTitle>Login</LoginTitle>
          <FieldName>Email</FieldName>
          <FieldInput />
          <FieldName>Senha</FieldName>
          <FieldInput />
          <ActionButton>Entrar</ActionButton>
        </Container>
        <Line />
        <Container>
          <LoginTitle>Criar conta</LoginTitle>
          <FieldName>Nome completo</FieldName>
          <FieldInput />
          <FieldName>Email</FieldName>
          <FieldInput />
          <FieldName>Senha</FieldName>
          <FieldInput />
          <ActionButton>Cadastrar</ActionButton>
        </Container>
      </MainWrapper>
    </Main>
  );
};

export { LoginSection };
