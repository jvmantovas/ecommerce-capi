import React, { useEffect, useState } from "react";
import { Product } from "../Product/Product";
import { useProductData } from "../../hooks/useProductData";

const ProductList = ({ filterType, genre }) => {
  const products = useProductData();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    let filteredProducts = products;

    if (filterType === "promo") {
      filteredProducts = products.filter(
        (product) => product.old_price !== "0.00"
      );
    } else if (filterType === "genre") {
      filteredProducts = products.filter(
        (product) =>
          product.first_genre === genre ||
          product.second_genre === genre ||
          product.first_subgenre === genre ||
          product.second_subgenre === genre
      );
    }

    filteredProducts = filteredProducts.slice(0, 10);

    setFilteredProducts(filteredProducts);
  }, [filterType, genre, products]);

  return <Product products={filteredProducts} />;
};

export { ProductList };
