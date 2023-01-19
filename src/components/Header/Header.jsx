import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { Hr, LowerHeader, MainHeader, Menu, UpperHeader } from "./styles";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showUpperHeader, setShowUpperHeader] = useState(true);
  const [showLowerHeader, setShowLowerHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
      if (window.pageYOffset > 0) {
        setShowUpperHeader(false);
        setShowLowerHeader(false);
      } else {
        setShowUpperHeader(true);
        setShowLowerHeader(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <UpperHeader hidden={!showUpperHeader} />
      <Hr />
      <MainHeader sticky={!showUpperHeader && !showLowerHeader}>
        <Button />
        <img src="../../../public/capi-logo.svg" alt="" />
        <Link className="right-side" to="/">
          <img src="../../../public/acc.svg" alt="" />
          <img src="../../../public/cart.svg" alt="" />
        </Link>
      </MainHeader>
      <Hr />
      <LowerHeader hidden={!showLowerHeader}>
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
