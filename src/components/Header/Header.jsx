import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { LowerHeader, MainHeader, UpperHeader } from "./styles";

function Header() {
  return (
    <header>
      <UpperHeader />
      <MainHeader>
        <Button />
        <img src="../../../public/capi-logo.svg" alt="" />
        <div>
          <Link to="/">
            <img src="../../../public/acc.svg" alt="" />
          </Link>
          <Link to="/">
            <img src="../../../public/cart.svg" alt="" />
          </Link>
        </div>
      </MainHeader>
      <LowerHeader />
    </header>
  );
}

export default Header;
