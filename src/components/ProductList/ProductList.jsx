import React, { useState, useEffect } from "react";
import { Product } from "../Product/Product";

const ProductList = ({ products, filter }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) => product.promotion === filter)
    );
  }, [products, filter]);

  return (
    <>
      {filteredProducts.slice(0, 4).map((product) => (
        <Product products={filteredProducts} />
      ))}
    </>
  );
};

export { ProductList };
