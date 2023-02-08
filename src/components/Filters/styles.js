import styled from "styled-components";

export const FiltersContainer = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 1rem;
`;

export const FilterSection = styled.div`
  margin-bottom: 1rem;
  text-align: center;
`;

export const FilterTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-family: "HarmoniaSansW01-Regular";
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0.4px;
  color: #000000;
  text-align: left;
  padding-top: 0.25rem;
`;

export const GenresList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  list-style-type: none;
  text-align: left;
  padding: 0;
  margin: 0;
  font-family: "HarmoniaSansW01-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #444444;
`;

export const GenreItem = styled.li`
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const FilterCheckbox = styled.input`
  margin-right: 0.5rem;
`;

export const FilterRange = styled.input`
  width: 100%;
`;

export const ClearFiltersButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #444;
  }
`;
