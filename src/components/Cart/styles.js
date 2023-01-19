import styled from "styled-components";

const CartWrapper = styled.section`
  width: 100%;
  padding: 1rem;
`;

const CartTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid #ddd;
    padding: 0.5rem;
    text-align: left;
  }
`;

const CartButton = styled.button`
  background-color: #f6d53b;
  color: #000;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #000;
    color: #f6d53b;
  }
`;
