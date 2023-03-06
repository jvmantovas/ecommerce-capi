import styled from "styled-components";

export const CartWrapper = styled.section`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 3rem;
  z-index: 1;
  h2 {
    font-family: "HarmoniaSansW01-Semibold", sans-serif;
    font-size: 50px;
    line-height: 20px;
    align-self: flex-start;
    margin-bottom: 3rem;
  }
  h3 {
    padding: 2rem;
  }
`;

export const CartTable = styled.table`
  width: 100%;
  max-width: 90vw;
  border-collapse: collapse;
  th,
  td {
    text-align: left;
    padding: 10px;
    border-bottom: 1px solid #6b6b6b;
    font-family: "HarmoniaSansMonoW01-Regular", sans-serif;
  }
  tbody {
    display: table-row-group;
  }
  .remove-td {
    width: 120px;
  }
`;

export const CartButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90vw;
`;

export const CartButton = styled.button`
  background-color: #f6d53b;
  color: #000;
  padding: 0.5rem 1rem;
  border: 1px solid black;
  cursor: pointer;
  &:hover {
    background-color: #000;
    color: #f6d53b;
  }
`;

export const PaymentButton = styled(CartButton)`
  background-color: #f6d53b;
  color: #b50016;
  font-weight: bolder;
  &:hover {
    color: #b50016;
  }
`;
