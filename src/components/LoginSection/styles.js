import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  padding: 2rem;
  width: 50%;
`;

export const Line = styled.hr`
  margin-top: 50px;
  height: 400px;
  width: 0.5px;
  border-width: 0;
  color: #6b6b6b;
  background-color: #6b6b6b;
`;

export const LoginTitle = styled.h1`
  font-family: "HarmoniaSansW01-Semibold", sans-serif;
  font-size: 50px;
  line-height: 20px;
  /* padding-bottom: 5rem; */
  position: absolute;
  top: 200px;
`;

export const FieldName = styled.p`
  font-family: "HarmoniaSansMonoW01-Regular", sans-serif;
  font-style: normal;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0.4px;
  color: #000000;
  padding-top: 2rem;
`;

export const Form = styled.form``;

export const FieldInput = styled.input`
  display: block;
  background-color: transparent;
  font-size: 18px;
  padding: 10px;
  border: 1px solid black;
  max-width: 700px;
  &:focus {
    outline: 0;
  }
`;

export const ActionButton = styled.button`
  color: #b50016;
  background: transparent;
  border: transparent;
  font-size: 24px;
  width: 100px;
  margin-top: 20px;
  align-self: center;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
