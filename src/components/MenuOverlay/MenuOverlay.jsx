import React, { useState } from "react";
import { CloseButton, Li, Nav, Ul } from "./styles";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

const MenuOverlay = ({ navbarOpen, setNavbarOpen }) => {
  const handleMenuClick = () => {
    setNavbarOpen(false);
  };

  return (
    <Nav navbarOpen={navbarOpen}>
      <CloseButton>
        <GrClose size={35} onClick={handleMenuClick} />
      </CloseButton>
      <Ul>
        <Li>
          <Link
            to={"/"}
            onClick={() => {
              setNavbarOpen(false);
            }}
          >
            Home
          </Link>
        </Li>
        <Li>
          <Link
            to={"/products"}
            onClick={() => {
              setNavbarOpen(false);
            }}
          >
            Produtos
          </Link>
        </Li>
        <Li>
          <Link
            to={"/"}
            onClick={() => {
              setNavbarOpen(false);
            }}
          >
            Gêneros
          </Link>
        </Li>
        <Li>
          <Link
            to={"/"}
            onClick={() => {
              setNavbarOpen(false);
            }}
          >
            Entregas
          </Link>
        </Li>
        <Li>
          <Link
            to={"/"}
            onClick={() => {
              setNavbarOpen(false);
            }}
          >
            Sobre
          </Link>
        </Li>
        <Li>
          <Link
            to={"/"}
            onClick={() => {
              setNavbarOpen(false);
            }}
          >
            Contato
          </Link>
        </Li>
      </Ul>
    </Nav>
  );
};

export { MenuOverlay };
