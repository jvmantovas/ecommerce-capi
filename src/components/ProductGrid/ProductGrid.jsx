import React, { useEffect, useState } from "react";
import { Filters } from "../Filters/Filters";
import { Product } from "../Product/Product";
import { GridView, ProductsWrapper } from "./styles";
import axios from "axios";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState({ genre: "", promoChecked: false });

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        "http://localhost/ecommerce-capi/products.php"
      );
      setProducts(response.data);
    }
    getData();
  }, []);

  useEffect(() => {
    let filteredProducts = products;

    if (filter.genre) {
      filteredProducts = products.filter(
        (product) =>
          product.first_genre === filter.genre ||
          product.second_genre === filter.genre ||
          product.first_subgenre === filter.genre ||
          product.second_subgenre === filter.genre
      );
    }

    if (filter.promoChecked) {
      filteredProducts = filteredProducts.filter(
        (product) => product.old_price !== "0.00"
      );
    }

    setFilteredProducts(filteredProducts);
  }, [filter, products]);

  const handleFilterChange = (newFilter) => {
    setFilter({ ...filter, ...newFilter });
  };

  return (
    <ProductsWrapper>
      <Filters handleFilterChange={handleFilterChange} />
      <GridView>
        <Product products={filteredProducts} />
      </GridView>
    </ProductsWrapper>
  );
};

export { ProductGrid };
