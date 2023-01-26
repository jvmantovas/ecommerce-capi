import styled from "styled-components";

export const AccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 3rem;
  margin-left: 3rem;
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

export const UserInfo = styled.div`
  p {
    font-size: 20px;
    margin: 0.5rem 0;
  }
`;

export const CartPreview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  p {
    margin: 0.5rem 0;
  }
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

export const OrderHistoryWrapper = styled.div`
  position: absolute;
  align-self: flex-end;
  margin-right: 3rem;
`;

export const OrderHistoryButton = styled.button`
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

export const OrderHistory = styled.div`
  div {
    margin: 0.5rem 0;
  }
`;
