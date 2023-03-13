// import React, { createContext, useState } from "react";
// import axios from "axios";

// export const ProductContext = createContext();

// export const ProductProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [filter, setFilter] = useState({ genre: "", promoChecked: false });

//   useEffect(() => {
//     async function getData() {
//       const response = await axios.get(
//         "http://localhost/ecommerce-capi/products.php"
//       );
//       setProducts(response.data);
//     }
//     getData();
//   }, []);

//   useEffect(() => {
//     let filteredProducts = products;

//     if (filter.genre) {
//       filteredProducts = products.filter(
//         (product) =>
//           product.first_genre === filter.genre ||
//           product.second_genre === filter.genre ||
//           product.first_subgenre === filter.genre ||
//           product.second_subgenre === filter.genre
//       );
//     }

//     if (filter.promoChecked) {
//       filteredProducts = filteredProducts.filter(
//         (product) => product.old_price !== "0.00"
//       );
//     }

//     setFilteredProducts(filteredProducts);
//   }, [filter, products]);

//   const handleFilterChange = (newFilter) => {
//     setFilter({ ...filter, ...newFilter });
//   };

//   return (
//     <ProductContext.Provider
//       value={{ products, filteredProducts, handleFilterChange }}
//     >
//       {children}
//     </ProductContext.Provider>
//   );
// };

import { createContext } from "react";

const ProductContext = createContext();

export default ProductContext;
