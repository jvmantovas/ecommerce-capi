import React, { useState, useEffect } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showUpperHeader, setShowUpperHeader] = useState(true);
  const [showLowerHeader, setShowLowerHeader] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("");

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

  useEffect(() => {
    const handleMediaQueryChange = (e) => {
      setIsSmallScreen(e.matches);
    };

    const mediaQuery = window.matchMedia("(max-width: 768px)");
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    setIsSmallScreen(mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const leftContainer = isSmallScreen ? (
    <CgMenuLeftAlt size={35} onClick={() => setIsMenuOpen(!isMenuOpen)} />
  ) : (
    <SearchBar />
  );

  const logoContainer = isSmallScreen ? (
    <>
      <img src="../../../public/CAPIVARARECORDS.svg" alt="" />
    </>
  ) : (
    <>
      <img src="../../../public/capi-logo.svg" alt="" />
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

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
    navigate(`/products?genre=${genre}`);
  };

  const lowerMenuContianer = isSmallScreen ? (
    <SearchBar />
  ) : (
    <>
      <Menu>
        <div
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
                  <p key={genre} onClick={() => handleGenreClick(genre)}>
                    {genre}
                  </p>
                ))}
              </div>
              <div className="dropdown-menu-col">
                {genres.slice(4).map((genre) => (
                  <p key={genre} onClick={() => handleGenreClick(genre)}>
                    {genre}
                  </p>
                ))}
              </div>
            </DropDown>
          )}
        </div>
        <p onClick={() => navigate("/products")}>PRODUTOS</p>
        <p>ENTREGAS</p>
        <p>SOBRE</p>
        <p>CONTATO</p>
      </Menu>
    </>
  );

  return (
    <header>
      <UpperHeader hidden={!showUpperHeader || isSmallScreen} />
      <Hr />
      <MainHeader sticky={!showUpperHeader && !showLowerHeader}>
        <div className="left-container">{leftContainer}</div>
        <Link to={`/`} style={{ textDecoration: "none" }}>
          {logoContainer}
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
      <LowerHeader hidden={!showLowerHeader}>{lowerMenuContianer}</LowerHeader>
    </header>
  );
};

export { Header };
