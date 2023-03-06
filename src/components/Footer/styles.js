import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  min-height: 500px;
  z-index: 1;
`;

export const Subscribe = styled.div`
  height: 75px;
  width: 100%;
  background-color: #ce2237;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  p {
    font-family: "HarmoniaSansMonoW01-Bold";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.4px;
    color: #ffffff;
    padding-right: 1rem;
  }
`;

export const SubButton = styled.div`
  background: #f6d53b;
  border-radius: 10px;
  color: #000000;
  cursor: pointer;
  padding: 10px;
  border-radius: 20px;
  border: none;
  font-family: "towerfont", sans-serif;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 1px;
  height: 100%;
  min-width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterInfo = styled.div`
  min-height: 350px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 3rem;
  div {
    padding: 2rem;
    .social-icons {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: -2rem;
    }
    h2 {
      font-family: "HarmoniaSansW01-Semibold", sans-serif;
      padding-bottom: 1rem;
    }
    p,
    li {
      font-family: "HarmoniaSansMonoW01-Regular", sans-serif;
      padding: 0.2rem;
    }
  }
  ul {
    list-style: none;
  }
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 1.5rem;
    div {
      padding: 1rem;
    }
  }
  @media screen and (max-width: 460px) {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr;
    padding: 1.5rem;
    div {
      padding: 1rem;
    }
    .social-icons {
      padding-top: 2rem;
      max-width: 60%;
    }
  }
`;

export const FooterCopy = styled.div`
  height: 75px;
  width: 100%;
  background-color: #ce2237;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f6d53b;
  font-family: "HarmoniaSansW01-Semibold";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 1.5px;
`;
