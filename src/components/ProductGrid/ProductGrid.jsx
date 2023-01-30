import React, { useEffect, useState } from "react";
import { Filters } from "../Filters/Filters";
import { Product } from "../Product/Product";
import { GridView, ProductsWrapper } from "./styles";
import axios from "axios";

const ProductGrid = () => {
  const [productsData, setProductsData] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

  const handleFilterChange = (selectedGenre) => {
    setSelectedGenre(selectedGenre);
  };

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        "http://localhost/ecommerce-capi/products.php"
      );
      setProductsData(response.data);
    }
    getData();
  }, []);

  const filteredProductsData =
    selectedGenre === ""
      ? productsData
      : productsData.filter((product) => product.genre === selectedGenre);

  return (
    <ProductsWrapper>
      <Filters onFilterChange={handleFilterChange} />
      <GridView>
        {filteredProductsData.map((product) => (
          <Product
            key={product.id}
            product={product}
            selectedGenre={selectedGenre}
          />
        ))}
      </GridView>
    </ProductsWrapper>
  );
};

export { ProductGrid };
