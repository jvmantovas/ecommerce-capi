import styled from "styled-components";

export const SearchContainer = styled.div`
  background: #fafafa;
  border-radius: 20px;
  @media screen and (max-width: 1050px) {
    display: block;
  }
  @media screen and (max-width: 768px) {
    min-width: 100%;
  }
`;

export const Form = styled.form`
  position: relative;
  @media screen and (max-width: 768px) {
    min-width: 100%;
  }
`;

export const Input = styled.input`
  display: block;
  font-size: 18px;
  padding: 10px;
  border-radius: 20px;
  border: none;
  &:focus {
    border: 0;
    outline: 0;
  }
  @media screen and (max-width: 768px) {
    height: 35px;
    width: 85vw;
  }
`;

export const Submit = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 50px;
  background: transparent;
  border: transparent;
  font-size: 20px;
  cursor: pointer;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
