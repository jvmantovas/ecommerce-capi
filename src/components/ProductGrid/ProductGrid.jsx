import React, { useState, useMemo } from "react";
import { Filters } from "../Filters/Filters";
import { Product } from "../Product/Product";
import { GridView, ProductsWrapper } from "./styles";
import { useProductData } from "../../hooks/useProductData";
import { SortMenu } from "../SortMenu/SortMenu";

const ProductGrid = ({ searchQuery, selectedGenre, filterType }) => {
  const products = useProductData();
  const [filter, setFilter] = useState({
    genre: "",
    promoChecked: false,
  });
  const [sort, setSort] = useState("default");

  const handleClearFilters = () => {
    setFilter({ genre: "", promoChecked: false });
    setSort("default");
  };

  const handleSort = (newSort) => {
    setSort(newSort);
  };

  const filteredProducts = useMemo(() => {
    let filteredProducts = products;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredProducts = products.filter(
        (product) =>
          product.artist.toLowerCase().includes(query) ||
          product.title.toLowerCase().includes(query) ||
          product.first_genre.toLowerCase().includes(query) ||
          product.second_genre.toLowerCase().includes(query) ||
          product.first_subgenre.toLowerCase().includes(query) ||
          product.second_subgenre.toLowerCase().includes(query)
      );
    }

    if (filter.genre) {
      filteredProducts = products.filter(
        (product) =>
          product.first_genre === filter.genre ||
          product.second_genre === filter.genre ||
          product.first_subgenre === filter.genre ||
          product.second_subgenre === filter.genre
      );
    }

    if (selectedGenre) {
      filteredProducts = products.filter(
        (product) =>
          product.first_genre === selectedGenre ||
          product.second_genre === selectedGenre ||
          product.first_subgenre === selectedGenre ||
          product.second_subgenre === selectedGenre
      );
    }

    if (filter.promoChecked || filterType === "promo") {
      filteredProducts = filteredProducts.filter(
        (product) => product.old_price !== "0.00"
      );
    }
    if (filterType === "latest") {
      filteredProducts = products.sort((a, b) => b.id - a.id);
    }
    if (filterType === "discount") {
      filteredProducts = filteredProducts.filter(
        (product) => parseFloat(product.old_price) > 0
      );
      filteredProducts.sort(
        (a, b) =>
          parseFloat(b.old_price) -
          parseFloat(b.price) -
          (parseFloat(a.old_price) - parseFloat(a.price))
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
    } else if (sort === "default") {
      filteredProducts.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
    }

    return filteredProducts;
  }, [filter, products, sort, searchQuery, selectedGenre, filterType]);

  const handleFilterChange = (newFilter) => {
    setFilter({ ...filter, ...newFilter });
  };

  return (
    <ProductsWrapper>
      <Filters
        handleFilterChange={handleFilterChange}
        handleClearFilters={handleClearFilters}
      />
      <SortMenu handleSort={handleSort} />
      <GridView>
        <Product products={filteredProducts} />
      </GridView>
    </ProductsWrapper>
  );
};

export { ProductGrid };
