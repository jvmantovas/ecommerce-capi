import React from "react";
import Button from "../Button/Button";
import { LowerHeader, MainHeader, UpperHeader } from "./styles";

function Header() {
  return (
    <header>
      <UpperHeader />
      <MainHeader>
        <Button />
        <img src="../../../public/capi-logo.svg" alt="" />
      </MainHeader>
      <LowerHeader />
    </header>
  );
}

export default Header;
