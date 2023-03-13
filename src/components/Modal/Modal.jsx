import React, { useState } from "react";
import axios from "axios";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { toast } from "react-toastify";
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
  const [isLoading, setIsLoading] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  const addToCart = async (product_id) => {
    setIsLoading(true);
    const userId = localStorage.getItem("userID");
    const token = localStorage.getItem("token");
    try {
      const productData = {
        user_id: userId,
        product_id: product_id,
        quantity: 1,
        token: token,
      };
      const response = await axios.post("/api/add_to_cart.php", productData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 201 || response.status === 200) {
        toast.success(response.data.message);
      } else {
        toast.error(response.status, response.data.message, "Falhou");
        toast.error(response.data.message);
        console.log(response.data);
      }
    } catch (error) {
      toast.error(error.message, "Falhou");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Overlay>
      <ModalWrapper onKeyDown={handleKeyDown} tabIndex={-1}>
        <CloseButton onClick={onClose}>
          <AiOutlineCloseCircle />
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
