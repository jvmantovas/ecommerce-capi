import React from "react";
import {
  AddToCartButton,
  AlbumTitle,
  CloseButton,
  Cover,
  MainGenre,
  ModalContent,
  ModalWrapper,
  OldPrice,
  Overlay,
  Price,
  PriceWrapper,
  RecordType,
  SubGenre,
} from "./styles";

const Modal = ({ product, onClose }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  return (
    <Overlay onClick={onClose}>
      <ModalWrapper onKeyDown={handleKeyDown} tabIndex={-1}>
        <CloseButton onClick={onClose}>
          <span aria-hidden="true">&times;</span>
          {/* <span className="sr-only">Close</span> */}
        </CloseButton>
        <ModalContent>
          <Cover src={product.image} alt="" />
          <AlbumTitle>
            {product.artist} - {product.title}
          </AlbumTitle>
          <MainGenre>
            {product.first_genre}, {product.second_genre}
          </MainGenre>
          <SubGenre>
            {product.first_subgenre}, {product.second_subgenre}
          </SubGenre>
          {product.old_price !== "0.00" && (
            <OldPrice>R${product.old_price}</OldPrice>
          )}
          <PriceWrapper>
            <RecordType>{product.type}</RecordType>
            <Price>R${product.price}</Price>
          </PriceWrapper>
          <AddToCartButton onClick={() => addToCart(product.id)}>
            <img src="../../../public/assets/cart-vector.svg" alt="" />
            <p>Adicionar ao carrinho</p>
          </AddToCartButton>
        </ModalContent>
      </ModalWrapper>
    </Overlay>
  );
};

export { Modal };
