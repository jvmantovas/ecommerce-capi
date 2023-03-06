import { useState, useEffect } from "react";
import axios from "axios";

export function useProductData() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        "http://capivararecords.rf.gd/products.php"
      );
      setProducts(response.data);
    }
    getData();
  }, []);

  return products;
}
