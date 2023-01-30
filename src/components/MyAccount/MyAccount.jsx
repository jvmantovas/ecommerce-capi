import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Main } from "../Hero/styles";
import {
  AccountWrapper,
  CartButton,
  CartPreview,
  OrderHistory,
  OrderHistoryButton,
  OrderHistoryWrapper,
  UserInfo,
} from "./styles";

const MyAccount = () => {
  const [showOrderHistory, setShowOrderHistory] = useState(false);
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    navigate(`/login`);
  };

  useEffect(() => {
    if (!localStorage.getItem("userName")) {
      navigate(`/login`);
    }
  }, []);

  return (
    <Main style={{ backgroundColor: "#f6d53b" }}>
      <AccountWrapper>
        <h2>Minha Conta</h2>
        <CartButton onClick={handleLogout}>Logout</CartButton>
        <UserInfo>
          <h3>Informações do Usuário</h3>
          <p>Nome: {localStorage.getItem("userName")}</p>
          <p>Email: {localStorage.getItem("userEmail")}</p>
          <p>Endereço: Exemplo</p>
        </UserInfo>
        <div>
          <h3>Carrinho</h3>
          <CartPreview>
            <p>Exemplo x 2</p>

            <CartButton>Ver Carrinho</CartButton>
          </CartPreview>
        </div>
        <OrderHistoryWrapper>
          <h3>Histórico de Pedidos</h3>
          <OrderHistory>
            <div>
              <p>Data: Exemplo</p>
              <p>Valor: R$99,99</p>
              <p>Itens: Exemplo</p>
            </div>
          </OrderHistory>
        </OrderHistoryWrapper>
      </AccountWrapper>
    </Main>
  );
};

export { MyAccount };
