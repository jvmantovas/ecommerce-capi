import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
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
} from "./styles";

const Product = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        "http://localhost/ecommerce-capi/products.php"
      );
      setProductsData(response.data);
    }
    getData();
  }, []);

  console.log(productsData);

  return (
    <>
      {productsData.map((product) => (
        <Card key={product.id}>
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
        </Card>
      ))}
    </>
  );
};

export { Product };
