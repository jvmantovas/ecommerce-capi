import React, { useState, useEffect } from "react";
import { Product } from "../Product/Product";
import { useProductData } from "../../hooks/useProductData";
import { Filters } from "../Filters/Filters";

const ProductList = () => {
  const products = useProductData();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState({ genre: "", promoChecked: true });

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

  return (
    <>
      {filteredProducts.slice(0, 10).map((product) => (
        <Product products={filteredProducts} />
      ))}
    </>
  );
};

export { ProductList };
