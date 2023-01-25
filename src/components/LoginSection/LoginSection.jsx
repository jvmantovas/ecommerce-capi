import React, { useState } from "react";
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
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const sendData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
  };

  return (
    <Main style={{ backgroundColor: "#f6d53b" }}>
      <MainWrapper>
        <Container>
          <LoginTitle>Login</LoginTitle>
          <FieldName>Email</FieldName>
          <FieldInput type="email" name="email" />
          <FieldName>Senha</FieldName>
          <FieldInput type="password" name="password" />
          <ActionButton>Entrar</ActionButton>
        </Container>
        <Line />
        <Container>
          <form onSubmit={submitForm}>
            <LoginTitle>Criar conta</LoginTitle>
            <FieldName>Nome completo</FieldName>
            <FieldInput
              type="text"
              name="name"
              onChange={handleChange}
              value={data.name}
            />
            <FieldName>Email</FieldName>
            <FieldInput
              type="email"
              name="email"
              onChange={handleChange}
              value={data.email}
            />
            <FieldName>Senha</FieldName>
            <FieldInput
              type="password"
              name="password"
              onChange={handleChange}
              value={data.value}
            />
            <ActionButton type="submit" name="submit" value="Register">
              Cadastrar
            </ActionButton>
          </form>
        </Container>
      </MainWrapper>
    </Main>
  );
};

export { LoginSection };
