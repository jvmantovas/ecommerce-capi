import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import {
  AccountWrapper,
  CartWrapper,
  DropDown,
  Hr,
  LowerHeader,
  MainHeader,
  Menu,
  RightButtons,
  UpperHeader,
} from "./styles";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const genres = [
    "Pop",
    "Rock",
    "Jazz",
    "Blues",
    "Country",
    "Classical",
    "Rap",
    "Reggae",
  ];

  return (
    <header>
      <UpperHeader hidden={!showUpperHeader} />
      <Hr />
      <MainHeader sticky={!showUpperHeader && !showLowerHeader}>
        <Button />
        <img src="../../../public/capi-logo.svg" alt="" />

        <RightButtons>
          <AccountWrapper>
            <img src="../../../public/assets/acc-vector.svg" alt="" />
            <h2>CONTA</h2>
          </AccountWrapper>
          <CartWrapper>
            <img src="../../../public/assets/cart-vector.svg" alt="" />
            <h2>CARRINHO</h2>
          </CartWrapper>
        </RightButtons>
      </MainHeader>
      <Hr />
      <LowerHeader hidden={!showLowerHeader}>
        <Menu>
          <p
            onClick={() => setIsMenuOpen(true)}
            onMouseEnter={() => setIsMenuOpen(true)}
          >
            GÊNEROS
            {isMenuOpen && (
              <DropDown
                onMouseEnter={() => setIsMenuOpen(true)}
                onMouseLeave={() => setIsMenuOpen(false)}
              >
                <div className="dropdown-menu-col">
                  {genres.slice(0, 4).map((genre) => (
                    <p>{genre}</p>
                  ))}
                </div>
                <div className="dropdown-menu-col">
                  {genres.slice(4).map((genre) => (
                    <p>{genre}</p>
                  ))}
                </div>
              </DropDown>
            )}
          </p>
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
