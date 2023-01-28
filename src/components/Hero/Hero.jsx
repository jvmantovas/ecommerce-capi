import React, { useState } from "react";
import {
  AlbumTitle,
  Card,
  CardsWrapper,
  Cover,
  LeftArrowDiv,
  Main,
  MainGenre,
  OldPrice,
  Price,
  PriceWrapper,
  RecordType,
  RightArrowDiv,
  SeeMore,
  SubGenre,
  Title,
} from "./styles";
import { Product } from "../Product/Product";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useRef } from "react";

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
  const cardsWrapperRef = useRef(null);

  const handleLeftArrowClick = () => {
    setScrollPosition(scrollPosition - 100);
    cardsWrapperRef.current.scrollLeft -= 200;
  };

  const handleRightArrowClick = () => {
    setScrollPosition(scrollPosition + 100);
    cardsWrapperRef.current.scrollLeft += 200;
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
            ref={cardsWrapperRef}
          >
            <LeftArrowDiv
              onClick={handleLeftArrowClick}
              // onClick={() => setScrollLeft(scrollLeft - 300)}
              show={showLeftArrow}
            >
              <SlArrowLeft size={45} style={{ color: "#444444" }} />
            </LeftArrowDiv>
            <Product />
            <Card>
              <Cover
                src="https://i.discogs.com/e8XliqJxlmtY2ES7-X9l9hihTTU9RQzL8Ecu6eWsQuA/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc1MzM1/NC0xNjI0OTA4NTI3/LTM1NTcuanBlZw.jpeg"
                alt=""
              />
              <AlbumTitle>Jorge Ben - Jorge Ben</AlbumTitle>
              <MainGenre>Jazz, Brasil</MainGenre>
              <SubGenre>Bossanova, MPB</SubGenre>
              <OldPrice>R$159,00</OldPrice>
              <PriceWrapper>
                <RecordType>VINIL - LP</RecordType>
                <Price>R$130,00</Price>
              </PriceWrapper>
            </Card>
            <Card>
              <Cover
                src="https://i.discogs.com/e8XliqJxlmtY2ES7-X9l9hihTTU9RQzL8Ecu6eWsQuA/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc1MzM1/NC0xNjI0OTA4NTI3/LTM1NTcuanBlZw.jpeg"
                alt=""
              />
              <AlbumTitle>Jorge Ben - Jorge Ben</AlbumTitle>
              <MainGenre>Jazz, Brasil</MainGenre>
              <SubGenre>Bossanova, MPB</SubGenre>
              <OldPrice>R$159,00</OldPrice>
              <PriceWrapper>
                <RecordType>VINIL - LP</RecordType>
                <Price>R$130,00</Price>
              </PriceWrapper>
            </Card>
            <Card>
              <Cover
                src="https://i.discogs.com/e8XliqJxlmtY2ES7-X9l9hihTTU9RQzL8Ecu6eWsQuA/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc1MzM1/NC0xNjI0OTA4NTI3/LTM1NTcuanBlZw.jpeg"
                alt=""
              />
              <AlbumTitle>Jorge Ben - Jorge Ben</AlbumTitle>
              <MainGenre>Jazz, Brasil</MainGenre>
              <SubGenre>Bossanova, MPB</SubGenre>
              <OldPrice>R$159,00</OldPrice>
              <PriceWrapper>
                <RecordType>VINIL - LP</RecordType>
                <Price>R$130,00</Price>
              </PriceWrapper>
            </Card>
            <Card>
              <Cover
                src="https://i.discogs.com/e8XliqJxlmtY2ES7-X9l9hihTTU9RQzL8Ecu6eWsQuA/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc1MzM1/NC0xNjI0OTA4NTI3/LTM1NTcuanBlZw.jpeg"
                alt=""
              />
              <AlbumTitle>Jorge Ben - Jorge Ben</AlbumTitle>
              <MainGenre>Jazz, Brasil</MainGenre>
              <SubGenre>Bossanova, MPB</SubGenre>
              <OldPrice>R$159,00</OldPrice>
              <PriceWrapper>
                <RecordType>VINIL - LP</RecordType>
                <Price>R$130,00</Price>
              </PriceWrapper>
            </Card>
            <Card>
              <Cover
                src="https://i.discogs.com/e8XliqJxlmtY2ES7-X9l9hihTTU9RQzL8Ecu6eWsQuA/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc1MzM1/NC0xNjI0OTA4NTI3/LTM1NTcuanBlZw.jpeg"
                alt=""
              />
              <AlbumTitle>Jorge Ben - Jorge Ben</AlbumTitle>
              <MainGenre>Jazz, Brasil</MainGenre>
              <SubGenre>Bossanova, MPB</SubGenre>
              <OldPrice>R$159,00</OldPrice>
              <PriceWrapper>
                <RecordType>VINIL - LP</RecordType>
                <Price>R$130,00</Price>
              </PriceWrapper>
            </Card>
            <RightArrowDiv
              // onClick={() => setScrollLeft(scrollLeft + 300)}
              show={showRightArrow}
              onClick={handleRightArrowClick}
              style={{ color: "#444444" }}
            >
              <SlArrowRight size={45} />
            </RightArrowDiv>
          </CardsWrapper>
        </Main>
        <Main style={{ backgroundColor: "#CE2237" }}>
          <Title style={{ color: "#f6d53b" }}>NOVIDADES</Title>
          <SeeMore>Ver todos</SeeMore>
          <CardsWrapper>
            <Card>
              <Cover
                src="https://i.discogs.com/e8XliqJxlmtY2ES7-X9l9hihTTU9RQzL8Ecu6eWsQuA/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc1MzM1/NC0xNjI0OTA4NTI3/LTM1NTcuanBlZw.jpeg"
                alt=""
              />
              <AlbumTitle>Jorge Ben - Jorge Ben</AlbumTitle>
              <MainGenre>Jazz, Brasil</MainGenre>
              <SubGenre>Bossanova, MPB</SubGenre>
              <OldPrice>R$159,00</OldPrice>
              <PriceWrapper>
                <RecordType>VINIL - LP</RecordType>
                <Price>R$130,00</Price>
              </PriceWrapper>
            </Card>
            <Card>
              <Cover
                src="https://i.discogs.com/e8XliqJxlmtY2ES7-X9l9hihTTU9RQzL8Ecu6eWsQuA/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc1MzM1/NC0xNjI0OTA4NTI3/LTM1NTcuanBlZw.jpeg"
                alt=""
              />
              <AlbumTitle>Jorge Ben - Jorge Ben</AlbumTitle>
              <MainGenre>Jazz, Brasil</MainGenre>
              <SubGenre>Bossanova, MPB</SubGenre>
              <OldPrice>R$159,00</OldPrice>
              <PriceWrapper>
                <RecordType>VINIL - LP</RecordType>
                <Price>R$130,00</Price>
              </PriceWrapper>
            </Card>
            <Card>
              <Cover
                src="https://i.discogs.com/e8XliqJxlmtY2ES7-X9l9hihTTU9RQzL8Ecu6eWsQuA/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc1MzM1/NC0xNjI0OTA4NTI3/LTM1NTcuanBlZw.jpeg"
                alt=""
              />
              <AlbumTitle>Jorge Ben - Jorge Ben</AlbumTitle>
              <MainGenre>Jazz, Brasil</MainGenre>
              <SubGenre>Bossanova, MPB</SubGenre>
              <OldPrice>R$159,00</OldPrice>
              <PriceWrapper>
                <RecordType>VINIL - LP</RecordType>
                <Price>R$130,00</Price>
              </PriceWrapper>
            </Card>
            <Card>
              <Cover
                src="https://i.discogs.com/e8XliqJxlmtY2ES7-X9l9hihTTU9RQzL8Ecu6eWsQuA/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc1MzM1/NC0xNjI0OTA4NTI3/LTM1NTcuanBlZw.jpeg"
                alt=""
              />
              <AlbumTitle>Jorge Ben - Jorge Ben</AlbumTitle>
              <MainGenre>Jazz, Brasil</MainGenre>
              <SubGenre>Bossanova, MPB</SubGenre>
              <OldPrice>R$159,00</OldPrice>
              <PriceWrapper>
                <RecordType>VINIL - LP</RecordType>
                <Price>R$130,00</Price>
              </PriceWrapper>
            </Card>
            <Card>
              <Cover
                src="https://i.discogs.com/e8XliqJxlmtY2ES7-X9l9hihTTU9RQzL8Ecu6eWsQuA/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc1MzM1/NC0xNjI0OTA4NTI3/LTM1NTcuanBlZw.jpeg"
                alt=""
              />
              <AlbumTitle>Jorge Ben - Jorge Ben</AlbumTitle>
              <MainGenre>Jazz, Brasil</MainGenre>
              <SubGenre>Bossanova, MPB</SubGenre>
              <OldPrice>R$159,00</OldPrice>
              <PriceWrapper>
                <RecordType>VINIL - LP</RecordType>
                <Price>R$130,00</Price>
              </PriceWrapper>
            </Card>
            <Card>
              <Cover
                src="https://i.discogs.com/e8XliqJxlmtY2ES7-X9l9hihTTU9RQzL8Ecu6eWsQuA/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc1MzM1/NC0xNjI0OTA4NTI3/LTM1NTcuanBlZw.jpeg"
                alt=""
              />
              <AlbumTitle>Jorge Ben - Jorge Ben</AlbumTitle>
              <MainGenre>Jazz, Brasil</MainGenre>
              <SubGenre>Bossanova, MPB</SubGenre>
              <OldPrice>R$159,00</OldPrice>
              <PriceWrapper>
                <RecordType>VINIL - LP</RecordType>
                <Price>R$130,00</Price>
              </PriceWrapper>
            </Card>
          </CardsWrapper>
        </Main>
        <Main style={{ backgroundColor: "#f6d53b" }}>
          <Title style={{ color: "#CE2237" }}>DESTAQUES</Title>
          <SeeMore>Ver todos</SeeMore>
          <CardsWrapper>
            <Card>
              <Cover
                src="https://i.discogs.com/e8XliqJxlmtY2ES7-X9l9hihTTU9RQzL8Ecu6eWsQuA/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc1MzM1/NC0xNjI0OTA4NTI3/LTM1NTcuanBlZw.jpeg"
                alt=""
              />
              <AlbumTitle>Jorge Ben - Jorge Ben</AlbumTitle>
              <MainGenre>Jazz, Brasil</MainGenre>
              <SubGenre>Bossanova, MPB</SubGenre>
              <OldPrice>R$159,00</OldPrice>
              <PriceWrapper>
                <RecordType>VINIL - LP</RecordType>
                <Price>R$130,00</Price>
              </PriceWrapper>
            </Card>
            <Card>
              <Cover
                src="https://i.discogs.com/e8XliqJxlmtY2ES7-X9l9hihTTU9RQzL8Ecu6eWsQuA/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc1MzM1/NC0xNjI0OTA4NTI3/LTM1NTcuanBlZw.jpeg"
                alt=""
              />
              <AlbumTitle>Jorge Ben - Jorge Ben</AlbumTitle>
              <MainGenre>Jazz, Brasil</MainGenre>
              <SubGenre>Bossanova, MPB</SubGenre>
              <OldPrice>R$159,00</OldPrice>
              <PriceWrapper>
                <RecordType>VINIL - LP</RecordType>
                <Price>R$130,00</Price>
              </PriceWrapper>
            </Card>
            <Card>
              <Cover
                src="https://i.discogs.com/e8XliqJxlmtY2ES7-X9l9hihTTU9RQzL8Ecu6eWsQuA/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc1MzM1/NC0xNjI0OTA4NTI3/LTM1NTcuanBlZw.jpeg"
                alt=""
              />
              <AlbumTitle>Jorge Ben - Jorge Ben</AlbumTitle>
              <MainGenre>Jazz, Brasil</MainGenre>
              <SubGenre>Bossanova, MPB</SubGenre>
              <OldPrice>R$159,00</OldPrice>
              <PriceWrapper>
                <RecordType>VINIL - LP</RecordType>
                <Price>R$130,00</Price>
              </PriceWrapper>
            </Card>
            <Card>
              <Cover
                src="https://i.discogs.com/e8XliqJxlmtY2ES7-X9l9hihTTU9RQzL8Ecu6eWsQuA/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc1MzM1/NC0xNjI0OTA4NTI3/LTM1NTcuanBlZw.jpeg"
                alt=""
              />
              <AlbumTitle>Jorge Ben - Jorge Ben</AlbumTitle>
              <MainGenre>Jazz, Brasil</MainGenre>
              <SubGenre>Bossanova, MPB</SubGenre>
              <OldPrice>R$159,00</OldPrice>
              <PriceWrapper>
                <RecordType>VINIL - LP</RecordType>
                <Price>R$130,00</Price>
              </PriceWrapper>
            </Card>
            <Card>
              <Cover
                src="https://i.discogs.com/e8XliqJxlmtY2ES7-X9l9hihTTU9RQzL8Ecu6eWsQuA/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc1MzM1/NC0xNjI0OTA4NTI3/LTM1NTcuanBlZw.jpeg"
                alt=""
              />
              <AlbumTitle>Jorge Ben - Jorge Ben</AlbumTitle>
              <MainGenre>Jazz, Brasil</MainGenre>
              <SubGenre>Bossanova, MPB</SubGenre>
              <OldPrice>R$159,00</OldPrice>
              <PriceWrapper>
                <RecordType>VINIL - LP</RecordType>
                <Price>R$130,00</Price>
              </PriceWrapper>
            </Card>
            <Card>
              <Cover
                src="https://i.discogs.com/e8XliqJxlmtY2ES7-X9l9hihTTU9RQzL8Ecu6eWsQuA/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc1MzM1/NC0xNjI0OTA4NTI3/LTM1NTcuanBlZw.jpeg"
                alt=""
              />
              <AlbumTitle>Jorge Ben - Jorge Ben</AlbumTitle>
              <MainGenre>Jazz, Brasil</MainGenre>
              <SubGenre>Bossanova, MPB</SubGenre>
              <OldPrice>R$159,00</OldPrice>
              <PriceWrapper>
                <RecordType>VINIL - LP</RecordType>
                <Price>R$130,00</Price>
              </PriceWrapper>
            </Card>
          </CardsWrapper>
        </Main>
      </main>
    </>
  );
};

export { Hero };
