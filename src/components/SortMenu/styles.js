import styled from "styled-components";

export const SortMenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-width: 97%;
  position: absolute;
  z-index: 10;
  padding-left: 13%;
  button {
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    border: none;
    border-radius: 0.5rem;
    background-color: #f6d53b;
    color: #333;
    cursor: pointer;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    &:hover {
      transform: translateY(-3px);
      transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
      box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.3);
    }
  }
  @media (max-width: 768px) {
    position: relative;
    margin-left: 0;
    padding-left: 0;
  }
`;
