import React from "react";
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

const Product = ({ products }) => {
  return (
    <>
      {products.map((product, index) => (
        <Card key={product.id || index}>
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
