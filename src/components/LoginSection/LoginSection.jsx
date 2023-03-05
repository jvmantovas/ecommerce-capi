import React, { useEffect, useState } from "react";
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
import { toast } from "react-toastify";

const LoginSection = () => {
  let navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [user, setUser] = useState({ email: "", password: "" });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("userName")) {
      navigate(`/account`);
    }
  }, [navigate]);

  const handleLogin = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const sendData = {
        name: data.name,
        email: data.email,
        password: data.password,
      };

      const response = await axios.post(
        "http://localhost/ecommerce-capi/insert.php",
        sendData
      );

      if (response.status === 200) {
        toast.success("Usuário cadastrado com sucesso!");
        setData({
          name: "",
          email: "",
          password: "",
        });
      } else {
        toast.error("E-mail já está cadastrado!");
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const loginForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const userData = {
        email: user.email,
        password: user.password,
      };
      const response = await axios.post(
        "http://localhost/ecommerce-capi/login.php",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        localStorage.setItem("userName", response.data.user.name);
        localStorage.setItem("userEmail", response.data.user.email);
        localStorage.setItem("userID", response.data.user.id);
        localStorage.setItem("token", response.data.token);
        navigate(`/account`);
      } else {
        toast.error("E-mail ou password inválido!");
      }
    } catch (error) {
      toast.error("E-mail ou password inválido!");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
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
