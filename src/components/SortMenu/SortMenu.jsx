import React from "react";
import { SortMenuWrapper } from "./styles";

const SortMenu = ({ handleSort }) => {
  return (
    <SortMenuWrapper>
      <button onClick={() => handleSort("default")}>Default</button>
      <button onClick={() => handleSort("highest")}>
        Highest to Lowest Price
      </button>
      <button onClick={() => handleSort("lowest")}>
        Lowest to Highest Price
      </button>
    </SortMenuWrapper>
  );
};

export { SortMenu };
