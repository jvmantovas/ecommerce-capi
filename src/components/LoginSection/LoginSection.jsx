import React, { useState } from "react";
import axios from "axios";
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
import { useNavigate } from "react-router-dom";

const LoginSection = () => {
  let navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [user, setUser] = useState({ email: "", password: "" });

  const handleLogin = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const sendData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    console.log(sendData);
    axios
      .post("http://localhost/ecommerce-capi/insert.php", sendData)
      .then((res) => console.log(res.data))
      .catch((error) => {
        console.log(error.response);
      });
  };

  const loginForm = async (e) => {
    e.preventDefault();

    const userData = {
      email: user.email,
      password: user.password,
    };

    console.log(userData);

    axios
      .post("http://localhost/ecommerce-capi/login.php", userData)
      .then((result) => {
        if (result.status === 200) {
          window.localStorage.setItem("email", result.data.email);
          window.localStorage.setItem("userName", result.data.Nome);
          navigate(`/account`);
        } else {
          alert("Usuário inválido!");
        }
      });
  };

  return (
    <Main style={{ backgroundColor: "#f6d53b" }}>
      <MainWrapper>
        <Container>
          <form onSubmit={loginForm}>
            <LoginTitle>Login</LoginTitle>
            <FieldName>Email</FieldName>
            <FieldInput
              type="email"
              name="email"
              onChange={handleLogin}
              value={user.email}
            />
            <FieldName>Senha</FieldName>
            <FieldInput
              type="password"
              name="password"
              onChange={handleLogin}
              value={user.password}
            />
            <ActionButton type="submit" name="submit" value="Login">
              Entrar
            </ActionButton>
          </form>
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
              value={data.password}
            />
            <ActionButton
              type="submit"
              name="submit"
              value="Register"
              onClick={submitForm}
            >
              Cadastrar
            </ActionButton>
          </form>
        </Container>
      </MainWrapper>
    </Main>
  );
};

export { LoginSection };
