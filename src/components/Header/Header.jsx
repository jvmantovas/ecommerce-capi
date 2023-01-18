import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { Hr, LowerHeader, MainHeader, Menu, UpperHeader } from "./styles";

const Header = () => {
  return (
    <header>
      <UpperHeader />
      <Hr />
      <MainHeader>
        <Button />
        <img src="../../../public/capi-logo.svg" alt="" />
        <Link className="right-side" to="/">
          <img src="../../../public/acc.svg" alt="" />
          <img src="../../../public/cart.svg" alt="" />
        </Link>
      </MainHeader>
      <Hr />
      <LowerHeader>
        <Menu>
          <p>GÊNEROS</p>
          <p>PROMOÇÃO</p>
          <p>ENTREGAS</p>
          <p>SOBRE</p>
          <p>CONTATO</p>
        </Menu>
      </LowerHeader>
    </header>
  );
};

export { Header };
