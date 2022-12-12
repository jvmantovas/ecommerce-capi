import React from "react";
import { LowerHeader, MainHeader, UpperHeader } from "./styles";

function Header() {
  return (
    <header>
      <UpperHeader />
      <MainHeader>
        <img src="../../../public/capi-logo.svg" alt="" />
      </MainHeader>
      <LowerHeader />
    </header>
  );
}

export default Header;
