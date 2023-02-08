import React from "react";
import { SortMenuWrapper } from "./styles";

const SortMenu = ({ handleSort }) => {
  return (
    <SortMenuWrapper>
      <button onClick={() => handleSort("default")}>Padrão</button>
      <button onClick={() => handleSort("highest")}>Maior para menor</button>
      <button onClick={() => handleSort("lowest")}>Menor para maior</button>
    </SortMenuWrapper>
  );
};

export { SortMenu };
