import React from "react";

import { Input, Form, SearchContainer, Submit } from "../Button/styles";
import { FooterCopy, FooterInfo, Main, SubButton, Subscribe } from "./styles";

const Footer = () => {
  return (
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
      <FooterCopy>João Mantovaneli © 2022</FooterCopy>
    </Main>
  );
};

export { Footer };
