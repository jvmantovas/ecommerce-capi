import React, { useState } from "react";
import {
  CardsWrapper,
  LeftArrowDiv,
  Main,
  RightArrowDiv,
  SeeMore,
  Title,
} from "./styles";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useRef } from "react";
import { ProductList } from "../ProductList/ProductList";

const Hero = () => {
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = (e) => {
    const { scrollWidth, clientWidth, scrollLeft } = e.target;
    setScrollLeft(scrollLeft);
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollWidth > clientWidth + scrollLeft);
  };
  const [scrollPosition, setScrollPosition] = useState(0);
  const cardsWrapperRef1 = useRef(null);
  const cardsWrapperRef2 = useRef(null);
  const cardsWrapperRef3 = useRef(null);

  const handleLeftArrowClick = (ref) => {
    setScrollPosition(scrollPosition - 100);
    ref.current.scrollLeft -= 200;
  };

  const handleRightArrowClick = (ref) => {
    setScrollPosition(scrollPosition + 100);
    ref.current.scrollLeft += 200;
  };

  return (
    <>
      <main>
        <Main style={{ backgroundColor: "#f6d53b" }}>
          <Title style={{ color: "#ce2237" }}>DESCONTOS</Title>
          <SeeMore>Ver todos</SeeMore>
          <CardsWrapper
            onScroll={handleScroll}
            scrollLeft={scrollLeft}
            ref={cardsWrapperRef1}
          >
            <LeftArrowDiv
              onClick={() => handleLeftArrowClick(cardsWrapperRef1)}
              show={showLeftArrow}
            >
              <SlArrowLeft size={45} style={{ color: "#444444" }} />
            </LeftArrowDiv>
            <ProductList filterType="promo" />
            <RightArrowDiv
              show={showRightArrow}
              onClick={() => handleRightArrowClick(cardsWrapperRef1)}
              style={{ color: "#444444" }}
            >
              <SlArrowRight size={45} />
            </RightArrowDiv>
          </CardsWrapper>
        </Main>
        <Main style={{ backgroundColor: "#CE2237" }}>
          <Title style={{ color: "#f6d53b" }}>NOVIDADES</Title>
          <SeeMore>Ver todos</SeeMore>
          <CardsWrapper
            onScroll={handleScroll}
            scrollLeft={scrollLeft}
            ref={cardsWrapperRef2}
          >
            <LeftArrowDiv
              onClick={() => handleLeftArrowClick(cardsWrapperRef2)}
              show={showLeftArrow}
            >
              <SlArrowLeft size={45} style={{ color: "#444444" }} />
            </LeftArrowDiv>
            <ProductList filterType="promo" />
            <RightArrowDiv
              show={showRightArrow}
              onClick={() => handleRightArrowClick(cardsWrapperRef2)}
              style={{ color: "#444444" }}
            >
              <SlArrowRight size={45} />
            </RightArrowDiv>
          </CardsWrapper>
        </Main>
        <Main style={{ backgroundColor: "#f6d53b" }}>
          <Title style={{ color: "#CE2237" }}>DESTAQUES</Title>
          <SeeMore>Ver todos</SeeMore>
          <CardsWrapper
            onScroll={handleScroll}
            scrollLeft={scrollLeft}
            ref={cardsWrapperRef3}
          >
            <LeftArrowDiv
              onClick={() => handleLeftArrowClick(cardsWrapperRef3)}
              show={showLeftArrow}
            >
              <SlArrowLeft size={45} style={{ color: "#444444" }} />
            </LeftArrowDiv>
            <ProductList filterType="promo" />
            <RightArrowDiv
              show={showRightArrow}
              onClick={() => handleRightArrowClick(cardsWrapperRef3)}
              style={{ color: "#444444" }}
            >
              <SlArrowRight size={45} />
            </RightArrowDiv>
          </CardsWrapper>
        </Main>
      </main>
    </>
  );
};

export { Hero };
