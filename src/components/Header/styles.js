import styled from "styled-components";

export const UpperHeader = styled.div`
  top: 0;
  height: 32px;
  background-color: #f6d53b;
  ${({ hidden }) =>
    hidden &&
    `
    display: none;
    opacity: 0;
    transition: opacity 0.6s ease-out;
  `}
`;

export const MainHeader = styled.div`
  height: 72px;
  width: 100%;
  background-color: #f6d53b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 3;
  padding: 0 2rem;
  position: ${({ sticky }) => (sticky ? "fixed" : "relative")};
  top: ${({ sticky }) => (sticky ? "0" : "auto")};
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
  ${({ hidden }) =>
    hidden &&
    `
    display: none;
    opacity: 0;
    transition: opacity 0.6s ease-out;
  `}
`;

export const Menu = styled.div`
  width: 700px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  font-family: "HarmoniaSansW01-Regular", sans-serif;
  font-weight: 400;
  p:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const DropDown = styled.div`
  display: flex;
  position: absolute;
  top: 46px;
  /* left: 0; */
  width: 100%;
  box-sizing: border-box;
  max-width: 250px;
  background-color: #f6d53b;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
  font-family: "HarmoniaSansW01-Regular", sans-serif;
  font-weight: 400;
  .dropdown-menu-col {
    width: 50%;
    padding: 10px;
    margin: 0;
    text-align: left !important;
    p {
      color: #444;
      font-size: 18px;
      text-transform: uppercase;
      margin: 0;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const Hr = styled.hr`
  color: #6b6b6b;
  height: 0.8px;
  background-color: #6b6b6b;
  border: 0;
`;
