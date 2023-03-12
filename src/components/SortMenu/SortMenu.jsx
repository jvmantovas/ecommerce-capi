import React from "react";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
import { SortMenuWrapper } from "./styles";

const SortMenu = ({ handleSort }) => {
  return (
    <SortMenuWrapper>
      <button onClick={() => handleSort("default")}>Padrão</button>
      <button onClick={() => handleSort("highest")}>
        Preço
        <FaLongArrowAltUp />
      </button>
      <button onClick={() => handleSort("lowest")}>
        Preço
        <FaLongArrowAltDown />
      </button>
    </SortMenuWrapper>
  );
};

export { SortMenu };
