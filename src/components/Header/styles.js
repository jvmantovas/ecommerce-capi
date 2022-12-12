import styled from "styled-components";

export const UpperHeader = styled.div`
  top: 0;
  height: 32px;
  background-color: #f6d53b;
`;

export const MainHeader = styled.div`
  height: 72px;
  background-color: #f6d53b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 3;
  position: relative;
  padding: 0 2rem;
  .right-side img {
    padding: 10px;
  }
`;

export const LowerHeader = styled.div`
  height: 46px;
  background-color: #f6d53b;
  display: flex;
  justify-content: center;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
  z-index: 2;
  position: relative;
`;

export const Menu = styled.div`
  width: 700px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  font-weight: 500;
`;
