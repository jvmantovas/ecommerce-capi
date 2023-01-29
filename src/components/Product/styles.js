import styled from "styled-components";

export const Card = styled.div`
  box-sizing: border-box;
  height: 350px;
  width: 250px;
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  background: #f6d53b;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const Cover = styled.img`
  width: 200px;
  height: 200px;
  box-shadow: inset 4px 4px 4px 10px rgba(0, 0, 0, 0.25);
  align-self: center;
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
