import React from "react";
import { FaSearch } from "react-icons/fa";
import { Form, Input, SearchContainer, Submit } from "./styles";

function SearchBar() {
  return (
    <div>
      <SearchContainer>
        <Form action="">
          <Input type="text" placeholder="Buscar..." name="search" />
          <Submit type="submit">
            <FaSearch />
          </Submit>
        </Form>
      </SearchContainer>
    </div>
  );
}

export default SearchBar;
