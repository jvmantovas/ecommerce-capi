import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Form, Input, SearchContainer, Submit } from "./styles";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigate(`/products?search=${encodeURIComponent(query)}`);
      setQuery("");
    }
  };

  return (
    <div>
      <SearchContainer>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Buscar..."
            name="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Submit type="submit">
            <FaSearch />
          </Submit>
        </Form>
      </SearchContainer>
    </div>
  );
}

export default SearchBar;
