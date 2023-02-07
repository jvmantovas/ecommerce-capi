import React, { useState } from "react";
import {
  ClearFiltersButton,
  FilterCheckbox,
  FilterRange,
  FiltersContainer,
  FilterSection,
  FilterTitle,
  GenreItem,
  GenresList,
} from "./styles";

const Filters = ({ handleFilterChange }) => {
  const [promoChecked, setPromoChecked] = useState(false);

  const handleGenreClick = (genre) => {
    handleFilterChange({ genre });
  };

  const handlePromoClick = () => {
    setPromoChecked((prev) => !prev);
    handleFilterChange({ promoChecked: !promoChecked });
  };

  const handleClearClick = () => {
    setPromoChecked(false);
    handleFilterChange({ genre: "", promoChecked: false });
  };

  return (
    <FiltersContainer>
      <FilterSection>
        <FilterTitle>Gêneros</FilterTitle>
        <GenresList>
          <GenreItem type="checkbox" onClick={() => handleGenreClick("Brasil")}>
            Brasil
          </GenreItem>
          <GenreItem onClick={() => handleGenreClick("Rock")}>Rock</GenreItem>
          <GenreItem>Reggae</GenreItem>
          <GenreItem>Electronic</GenreItem>
          <GenreItem>House</GenreItem>
        </GenresList>
      </FilterSection>
      <FilterSection>
        <FilterTitle>Faixa de Preço</FilterTitle>
        <FilterRange type="range" />
      </FilterSection>
      <FilterSection>
        <FilterTitle>Promoção</FilterTitle>
        <FilterCheckbox type="checkbox" onClick={handlePromoClick} />
      </FilterSection>
      <ClearFiltersButton onClick={handleClearClick}>
        Limpar Filtros
      </ClearFiltersButton>
    </FiltersContainer>
  );
};

export { Filters };
