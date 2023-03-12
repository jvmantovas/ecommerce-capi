import styled from "styled-components";

export const FiltersContainer = styled.div`
  min-width: 10%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 2rem;
  margin-right: 0.5rem;
  @media (max-width: 768px) {
    flex-direction: row;
    order: 0;
    margin-right: 0;
    margin-bottom: 2rem;
    min-width: 100%;
    justify-content: center;
  }
`;

export const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
    justify-content: center;
    align-items: center;
  }
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
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 0;
    min-width: 80%;
  }
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
  position: relative;
  height: 20px;
  width: 20px;
  -webkit-appearance: none;
  background-color: #eee;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  align-self: center;
  &::before {
    content: "";
    position: absolute;
    display: none;
  }
  &:checked::before {
    display: block;
    background-color: #ce2237;
    width: 10px;
    height: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 2px;
  }
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
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
  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
`;
