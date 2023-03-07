import styled from "styled-components";

export const SortMenuWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  max-width: 100%;
  position: absolute;
  z-index: 10;
  margin-left: 11%;
  button {
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    border: none;
    border-radius: 0.5rem;
    background-color: #f6d53b;
    color: #333;
    cursor: pointer;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
  }
  @media (max-width: 768px) {
    position: relative;
    margin-left: 0;
  }
`;
