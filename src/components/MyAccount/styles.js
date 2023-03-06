import styled from "styled-components";

export const AccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
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
  @media screen and (max-width: 768px) {
    padding: 2rem;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CartInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 20px;
    margin: 0.5rem 0;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

export const CartPreview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    margin: 0.5rem 0;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

export const CartButton = styled.button`
  background-color: #f6d53b;
  font-family: "HarmoniaSansW01-Bold";
  color: #000;
  max-width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid black;
  cursor: pointer;
  &:hover {
    background-color: #000;
    color: #f6d53b;
  }
`;

export const LogoutButton = styled(CartButton)`
  /* position: absolute; */
  background-color: #ce2237;
  color: #f6d53b;
  bottom: 0;
  left: 0;
  margin: 1rem;
  @media screen and (max-width: 768px) {
    margin-top: 2rem;
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
