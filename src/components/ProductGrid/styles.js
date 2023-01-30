import styled from "styled-components";

export const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  background-color: #f6d53b;
  padding: 2rem;
`;

export const GridView = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  width: 80%;
`;
