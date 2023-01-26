import React, { useState } from "react";
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

  return (
    <Main style={{ backgroundColor: "#f6d53b" }}>
      <AccountWrapper>
        <h2>Minha Conta</h2>
        <UserInfo>
          <h3>Informações do Usuário</h3>
          <p>Nome: Exemplo</p>
          <p>Email: Exemplo</p>
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
