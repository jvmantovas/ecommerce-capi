import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 500px;
  z-index: 1;
`;

export const Title = styled.h1`
  font-family: "towerfont", sans-serif;
  font-size: 50px;
  line-height: 20px;
  margin-left: 50px;
  padding-top: 50px;
`;

export const SeeMore = styled.a`
  font-family: "HarmoniaSansMonoW01-Bold", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.4px;
  text-decoration-line: underline;
  color: #000000;
  float: right;
  margin-right: 50px;
  margin-top: -10px;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`;

export const CardsWrapper = styled.div`
  display: grid;
  width: 100%;
  height: 400px;
  text-align: center;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin-right: 1rem;
  grid-template-columns: 250px 250px 250px 250px 250px 250px;
  gap: 1rem;
  overflow-y: hidden;
`;

export const Card = styled.div`
  box-sizing: border-box;
  height: 350px;
  width: 250px;
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  background: #f6d53b;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
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
  line-height: 24px;
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
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #444444;
  text-align: left;
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  margin-top: -10px;
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

export const SubButton = styled.button`
  background: #f6d53b;
  border-radius: 10px;
  color: #000000;
  cursor: pointer;
  padding: 10px;
  border-radius: 20px;
  border: none;
  font-family: "towerfont", sans-serif;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 1px;
  height: 100%;
  min-width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterInfo = styled.div`
  height: 350px;
  width: 100%;
`;

export const Footer = styled.div`
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
