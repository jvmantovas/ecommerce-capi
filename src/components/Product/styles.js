import styled from "styled-components";

export const Card = styled.div`
  box-sizing: border-box;
  height: 350px;
  width: 250px;
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  padding: 1rem 1.5rem;
  background: #f6d53b;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-3px);
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.3);
    button {
      visibility: visible;
      transform: translateY(-8px);
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    }
  }

  @media (max-width: 630px) {
    height: 400px;
    width: 300px;
  }

  @media (max-width: 350px) {
    height: 350px;
    width: 250px;
  }
`;

export const Cover = styled.img`
  width: 200px;
  height: 200px;
  box-shadow: inset 4px 4px 4px 10px rgba(0, 0, 0, 0.25);
  align-self: center;
  @media (max-width: 630px) {
    width: 250px;
    height: 250px;
  }
  @media (max-width: 350px) {
    height: 200px;
    width: 200px;
  }
`;

export const AlbumTitle = styled.h2`
  font-family: "HarmoniaSansW01-Regular";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0.4px;
  color: #000000;
  text-align: left;
  padding-top: 0.25rem;
`;

export const MainGenre = styled.p`
  font-family: "HarmoniaSansW01-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #444444;
  text-align: left;
`;

export const SubGenre = styled.p`
  font-family: "HarmoniaSansW01-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  /* line-height: 20px; */
  letter-spacing: 0.4px;
  color: #444444;
  text-align: left;
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  bottom: 0.5rem;
  width: 80%;
`;

export const RecordType = styled.p`
  font-family: "HarmoniaSansW01-Semibold";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #444444;
  text-align: left;
`;

export const OldPrice = styled.p`
  font-family: "HarmoniaSansW01-Semibold";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 27px;
  text-decoration-line: line-through;
  color: #6b6b6b;
  text-align: right;
  width: 80%;
  position: absolute;
  bottom: 1.5rem;
`;

export const Price = styled.p`
  font-family: "HarmoniaSansW01-Semibold";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #ce2237;
  text-align: right;
  align-self: flex-end;
`;

export const AddToCartButton = styled.button`
  visibility: hidden;
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background-color: #ce2237;
  color: #fff;
  font-family: "HarmoniaSansW01-Semibold";
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    background-color: #a1162d;
  }
`;
