import React, { useEffect, useState } from "react";
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

const Filters = ({ onFilterChange }) => {
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
    onFilterChange(genre);
  };

  return (
    <FiltersContainer>
      <FilterSection>
        <FilterTitle>Gêneros</FilterTitle>
        <GenresList>
          <GenreItem
            type="checkbox"
            onClick={() => handleGenreClick("Brasil")}
            selected={selectedGenre === "Brasil"}
            selectedGenre={selectedGenre}
          >
            Brasil
          </GenreItem>
          <GenreItem>Rock</GenreItem>
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
        <FilterCheckbox type="checkbox" />
      </FilterSection>
      <ClearFiltersButton>Limpar Filtros</ClearFiltersButton>
    </FiltersContainer>
  );
};

export { Filters };
