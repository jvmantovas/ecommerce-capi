import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  min-width: 100%;
  padding: 0 10px;
  z-index: 10;
  height: 100vh;
  padding-top: 24px;
  background-color: #f6d53b;
  transform: translateX(-100%);
  opacity: 0;
  transition: all 300ms ease-in-out;
  transition-delay: 100ms;

  ${({ navbarOpen }) => navbarOpen && `transform: translateX(0%); opacity: 1; `}
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  &:hover {
    opacity: 60%;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-self: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Li = styled.li`
  padding: 20px;
  margin: 10px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;

  a {
    font-family: "HarmoniaSansW01-Semibold", sans-serif;
    font-weight: 600;
    text-decoration: none;
    color: #444;
    font-size: 30px;
    text-transform: uppercase;
    margin: 0;
    cursor: pointer;
    &:hover {
      opacity: 80%;
      text-decoration: underline;
    }
  }
`;
