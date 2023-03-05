import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import axios from "axios";

const MyAccount = () => {
  const [showOrderHistory, setShowOrderHistory] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userID");
    localStorage.removeItem("token");
    navigate(`/login`);
  };

  useEffect(() => {
    if (!localStorage.getItem("userName")) {
      navigate(`/login`);
    }
  }, []);

  useEffect(() => {
    const fetchCartItemsCount = async () => {
      const userId = localStorage.getItem("userID");
      const response = await axios.get(
        `http://localhost/ecommerce-capi/cart_items.php?user_id=${userId}`,
        userId
      );
      console.log(response.data);
      console.log(response.status);
      let count = 0;
      if (Array.isArray(response.data)) {
        count = response.data.reduce((acc, item) => acc + item.quantity, 0);
      }
      setCartItemCount(count);
    };

    fetchCartItemsCount();
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
            <p>{cartItemCount} itens no carrinho</p>
            <Link to="/cart">
              <CartButton>Ver Carrinho</CartButton>
            </Link>
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
