import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalWrapper = styled.div`
  position: relative;
  width: 90%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.8);
  padding: 1rem;
  outline: none;
  background-color: #f6d53b;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  @media (max-width: 630px) {
    width: 80%;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  /* top: 0.5rem;
  right: 1.5rem; */
  top: 0;
  right: 0;
  background-color: transparent;
  border: none;
  font-size: 2.5rem;
  color: #ce2237;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  span {
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.8);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    /* margin: -10px;
    right: 0.5rem; */
  }

  &:hover,
  &:focus {
    outline: none;
    color: #444444;
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
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin: 1rem 0;
  color: #000;
`;

export const MainGenre = styled.h3`
  font-size: 1.2rem;
  text-align: center;
  margin: 0.5rem 0;
  color: #000;
`;

export const SubGenre = styled.p`
  font-size: 1rem;
  text-align: center;
  margin: 0.5rem 0;
  color: #000;
`;

export const OldPrice = styled.span`
  font-size: 1.2rem;
  text-decoration: line-through;
  margin: 0.5rem 0;
  color: #000;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem 0;
`;

export const RecordType = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  margin-right: 0.5rem;
  color: #444444;
`;

export const Price = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
`;

export const AddToCartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: #f6d53b;
  color: #000000;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid black;
  transition: background-color 0.2s ease-in-out;
  P {
    margin-top: 3px;
  }
  img {
    width: 20px;
    height: 20px;
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: #ce2237;
    color: #000000;
  }
`;

// export const ButtonWrapper = styled.div`;
//   display: flex;
//   justify-content: center;
//   margin: 1rem 0;
// `;

// export const Button = styled.button`
//   font-size: 1.2rem;
//   font-weight: bold;
//   background-color: #000000;
//   color: #ffffff;
//   border: none;
//   padding: 0.5rem 1rem;
//   border-radius: 5px;
//   cursor: pointer;
//   transition: background-color 0.2s ease-in-out;

//   &:hover {
//     background-color: #ffffff;
//     color: #000000;
//   }
// `;
