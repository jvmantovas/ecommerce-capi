import axios from "axios";
import React from "react";
import { useState } from "react";
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
} from "../Hero/styles";

const Product = () => {
  const [products, setProducts] = useState({
    id: "",
    artist: "",
    title: "",
    firstGenre: "",
    secondGenre: "",
    fistSubgenre: "",
    secondSubgenre: "",
    price: "",
    oldPrice: "",
    type: "",
    image: "",
  });

  const [productsData, setProductsData] = useState([]);

  //   const fetchData = async () => {
  let data = [{}];
  async function status() {
    const response = await axios.get(
      "http://localhost/ecommerce-capi/products.php"
    );
    // .then((res) => console.log(res.data));
    data = response.data;
    await status();
  }
  console.log(data);
  //   fetchData();

  return (
    <>
      {data.map(({ image }) => (
        <Card>
          <Cover src={image} alt="" />
          <AlbumTitle>Jorge Ben - Jorge Ben</AlbumTitle>
          <MainGenre>Jazz, Brasil</MainGenre>
          <SubGenre>Bossanova, MPB</SubGenre>
          <OldPrice>R$159,00</OldPrice>
          <PriceWrapper>
            <RecordType>VINIL - LP</RecordType>
            <Price>R$130,00</Price>
          </PriceWrapper>
        </Card>
      ))}
    </>
  );
};

export { Product };
