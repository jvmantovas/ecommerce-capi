import React from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { Form, Input, SearchContainer, Submit } from "./styles";

function Button() {
  return (
    <>
      <CgMenuLeftAlt size={35} display="none" />
      <SearchContainer>
        <Form action="">
          <Input type="text" placeholder="Buscar..." name="search" />
          <Submit type="submit">
            <FaSearch />
          </Submit>
        </Form>
      </SearchContainer>
    </>
  );
}

export default Button;
