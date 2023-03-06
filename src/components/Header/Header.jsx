import React, { useState, useEffect } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
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
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      setScrollPosition(scrollTop);

      if (scrollTop > 0) {
        setShowUpperHeader(false);
        setShowLowerHeader(false);
        setIsMenuOpen(false);
      } else {
        setShowUpperHeader(true);
        setShowLowerHeader(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll, { passive: true });
    };
  }, []);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsSmallScreen(window.innerWidth <= 768);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  useEffect(() => {
    const handleMediaQueryChange = (e) => {
      setIsSmallScreen(e.matches);
    };

    const mediaQuery = window.matchMedia("(max-width: 768px)");
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Set initial value
    setIsSmallScreen(mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const leftContainer = isSmallScreen ? (
    <CgMenuLeftAlt size={35} onClick={() => setIsMenuOpen(!isMenuOpen)} />
  ) : (
    <>
      <CgMenuLeftAlt size={35} style={{ display: "none" }} />
      <SearchBar />
    </>
  );

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
      <UpperHeader hidden={!showUpperHeader || isSmallScreen} />
      <Hr />
      <MainHeader sticky={!showUpperHeader && !showLowerHeader}>
        <div className="left-container">{leftContainer}</div>
        <Link to={`/`} style={{ textDecoration: "none" }}>
          <img src="../../../public/capi-logo.svg" alt="" />
        </Link>
        <RightButtons>
          <Link to={`/account`} style={{ textDecoration: "none" }}>
            <AccountWrapper>
              <img src="../../../public/assets/acc-vector.svg" alt="" />
              <h2>CONTA</h2>
            </AccountWrapper>
          </Link>
          <Link to={`/cart`} style={{ textDecoration: "none" }}>
            <CartWrapper>
              <img src="../../../public/assets/cart-vector.svg" alt="" />
              <h2>CARRINHO</h2>
            </CartWrapper>
          </Link>
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
