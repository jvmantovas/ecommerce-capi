import React, { useEffect, useState } from "react";
import { Filters } from "../Filters/Filters";
import { Product } from "../Product/Product";
import { GridView, ProductsWrapper } from "./styles";
import { useProductData } from "../../hooks/useProductData";
import { SortMenu } from "../SortMenu/SortMenu";

const ProductGrid = () => {
  const products = useProductData();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState({ genre: "", promoChecked: false });
  const [sort, setSort] = useState("default");

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

    if (sort === "highest") {
      filteredProducts.sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      );
    } else if (sort === "lowest") {
      filteredProducts.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
    } else {
      filteredProducts.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
    }

    setFilteredProducts(filteredProducts);
  }, [filter, products, sort]);

  const handleFilterChange = (newFilter) => {
    setFilter({ ...filter, ...newFilter });
  };

  return (
    <ProductsWrapper>
      <Filters handleFilterChange={handleFilterChange} />
      <SortMenu handleSort={setSort} />
      <GridView>
        <Product products={filteredProducts} />
      </GridView>
    </ProductsWrapper>
  );
};

export { ProductGrid };
