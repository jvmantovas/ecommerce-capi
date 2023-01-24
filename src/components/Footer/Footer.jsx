import React from "react";
import { CiFacebook, CiInstagram, CiYoutube } from "react-icons/ci";

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
      <FooterInfo>
        <div>
          <h2>NOSSAS POLÍTICAS</h2>
          <ul>
            <li>Sobre</li>
            <li>Suporte</li>
            <li>Política de devolução</li>
            <li>Política de privacidade</li>
            <li>Termos de Uso</li>
          </ul>
        </div>
        <div>
          <h2>FALE CONOSCO</h2>
          <p>capivararecords@email.com</p>
          <p>(41) 8888-8888</p>
          <br />
          <h2>Nos siga nas redes</h2>
          <div className="social-icons">
            <CiFacebook size={33} />
            <CiInstagram size={35} />
            <CiYoutube size={36} />
          </div>
        </div>
        <div>
          <h2>INFORMAÇÕES</h2>
          <p>Entrega nacional e internacional</p>
          <p>Perguntas frequentes</p>
          <br />
          <h2>Métodos de Pagamento</h2>
        </div>
        <div>
          <p>Capivara Records Ltda.</p>
          <p>Loja online especializada em disco de vinil</p>
          <p>Novos, usados, importados e nacionais</p>
          <p>CNPJ: 12.345.678/0001-23</p>
          <br />
          <br />
          <p>Disco é cultura</p>
        </div>
      </FooterInfo>
      <FooterCopy>João Mantovaneli © 2022</FooterCopy>
    </Main>
  );
};

export { Footer };
