import React, { useEffect, useState } from "react";
import { Product } from "../Product/Product";
import axios from "axios";

const ProductGrid = () => {
  const [productsData, setProductsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        "http://localhost/ecommerce-capi/products.php"
      );
      setProductsData(response.data);
      setFilteredData(response.data);
    }
    getData();
  }, []);

  const handleFilter = (event) => {
    const filtered = productsData.filter(
      (product) => product.first_genre === event.target.value
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <div>
        <select onChange={handleFilter}>
          <option value="">All</option>
          <option value="Rock">Rock</option>
          <option value="Pop">Pop</option>
          <option value="Jazz">Jazz</option>
          <option value="Blues">Blues</option>
        </select>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        {filteredData.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export { ProductGrid };
