import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {
  AlbumTitle,
  Card,
  Cover,
  MainGenre,
  OldPrice,
  Price,
  PriceWrapper,
  RecordType,
  SubGenre,
  AddToCartButton,
} from "./styles";
import { Modal } from "../Modal/Modal";

const Product = ({ products }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = async (product_id) => {
    setIsLoading(true);
    const userId = localStorage.getItem("userID");
    const token = localStorage.getItem("token");
    console.log(userId, token);
    try {
      const productData = {
        user_id: userId,
        product_id: product_id,
        quantity: 1,
        token: token,
      };
      console.log(productData);
      const response = await axios.post(
        "http://localhost/ecommerce-capi/add_to_cart.php",
        productData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
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

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      {products.map((product, index) => (
        <Card key={product.id || index}>
          <Cover
            src={product.image}
            alt=""
            onClick={() => handleProductClick(product)}
          />
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
          </AddToCartButton>
        </Card>
      ))}
      {selectedProduct && (
        <Modal product={selectedProduct} onClose={closeModal} />
      )}
    </>
  );
};

export { Product };
