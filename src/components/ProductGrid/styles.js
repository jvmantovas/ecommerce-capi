import styled from "styled-components";

export const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  background-color: #f6d53b;
  padding: 5rem 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (max-width: 460px) {
    padding: 2rem 1rem;
  }
`;

export const GridView = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  width: 90%;
  padding-top: 2.5rem;
  padding-left: 2rem;
  @media (max-width: 768px) {
    order: 2;
    gap: 0.5rem;
    padding-left: 0;
    margin: auto;
    justify-items: center;
  }
  @media (max-width: 460px) {
  }
`;
