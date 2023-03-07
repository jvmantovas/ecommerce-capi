import React, { useEffect, useState } from "react";
import { Filters } from "../Filters/Filters";
import { Product } from "../Product/Product";
import { GridView, ProductsWrapper } from "./styles";
import { useProductData } from "../../hooks/useProductData";
import { SortMenu } from "../SortMenu/SortMenu";
import SearchBar from "../SearchBar/SearchBar";

const ProductGrid = ({ searchQuery }) => {
  const products = useProductData();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState({ genre: "", promoChecked: false });
  const [sort, setSort] = useState("default");

  const handleClearFilters = () => {
    setFilter({ genre: "", promoChecked: false });
    setSort("default");
    setSearchQuery("");
  };

  useEffect(() => {
    let filteredProducts = products;

    if (searchQuery) {
      const query = searchQuery.toLowerCase(); // extract query as a string
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
  }, [filter, products, sort, searchQuery]);

  const handleFilterChange = (newFilter) => {
    setFilter({ ...filter, ...newFilter });
  };

  return (
    <ProductsWrapper>
      <Filters
        handleFilterChange={handleFilterChange}
        handleClearFilters={handleClearFilters}
      />
      <SortMenu handleSort={setSort} />
      <GridView>
        {/* <SearchBar onSearch={handleSearch} /> */}
        <Product products={filteredProducts} />
      </GridView>
    </ProductsWrapper>
  );
};

export { ProductGrid };
