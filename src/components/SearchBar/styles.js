import styled from "styled-components";

export const SearchContainer = styled.div`
  background: #fafafa;
  border-radius: 20px;
`;

export const Form = styled.form`
  position: relative;
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
