import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

const Filters = ({ handleFilterChange, handleClearFilters }) => {
  const [promoChecked, setPromoChecked] = useState(false);
  const navigate = useNavigate();

  const handleGenreClick = (genre) => {
    handleFilterChange({ genre });
  };

  const handlePromoClick = () => {
    setPromoChecked((prev) => !prev);
    handleFilterChange({ promoChecked: !promoChecked });
  };

  const handleClearClick = () => {
    handleFilterChange({ genre: "", promoChecked: false });
    setPromoChecked(false);
    navigate("/products");
  };

  return (
    <FiltersContainer>
      <FilterSection>
        <FilterSection>
          <FilterTitle htmlFor="promo" className="promo-label">
            Promoção
          </FilterTitle>
          <FilterCheckbox
            type="checkbox"
            id="promo"
            defaultChecked={promoChecked}
            onClick={handlePromoClick}
          />
        </FilterSection>
        <FilterSection>
          <FilterTitle>Gêneros</FilterTitle>
          <GenresList>
            <GenreItem type="checkbox" onClick={() => handleGenreClick("")}>
              Todos
            </GenreItem>
            <GenreItem
              type="checkbox"
              onClick={() => handleGenreClick("Brasil")}
            >
              Brasil
            </GenreItem>
            <GenreItem onClick={() => handleGenreClick("Rock")}>Rock</GenreItem>
            <GenreItem onClick={() => handleGenreClick("Reggae")}>
              Reggae
            </GenreItem>
            <GenreItem onClick={() => handleGenreClick("Electronic")}>
              Electronic
            </GenreItem>
            <GenreItem onClick={() => handleGenreClick("House")}>
              House
            </GenreItem>
          </GenresList>
        </FilterSection>
        <ClearFiltersButton onClick={handleClearClick}>
          Limpar Filtros
        </ClearFiltersButton>
      </FilterSection>
    </FiltersContainer>
  );
};

export { Filters };
