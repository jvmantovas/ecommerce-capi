import React from "react";
import { FaSearch } from "react-icons/fa";
import { Input, Form, SearchContainer, Submit } from "../Button/styles";
import {
  AlbumTitle,
  Card,
  CardsWrapper,
  Cover,
  Footer,
  FooterInfo,
  Main,
  MainGenre,
  OldPrice,
  Price,
  PriceWrapper,
  RecordType,
  SeeMore,
  SubButton,
  SubGenre,
  Subscribe,
  Title,
} from "./styles";

const Hero = () => {
  return (
    <>
      <main>
        <Main style={{ backgroundColor: "#f6d53b" }}>
          <Title style={{ color: "#ce2237" }}>DESCONTOS</Title>
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
      <footer>
        <Main style={{ backgroundColor: "#f6d53b" }}>
          <Subscribe>
            <p>Inscreva-se para receber ofertas especiais e novidades</p>
            <SearchContainer>
              <Form action="">
                <Input
                  style={{ width: "350px" }}
                  type="text"
                  placeholder="E-mail..."
                  name="search"
                />
                <Submit type="submit">
                  <SubButton>Inscrever-se</SubButton>
                </Submit>
              </Form>
            </SearchContainer>
          </Subscribe>
          <FooterInfo></FooterInfo>
          <Footer>João Mantovaneli © 2022</Footer>
        </Main>
      </footer>
    </>
  );
};

export { Hero };
