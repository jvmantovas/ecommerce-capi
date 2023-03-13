import { useState, useEffect } from "react";
import axios from "axios";

export function useProductData() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const cachedData = localStorage.getItem("products");

      if (cachedData) {
        setProducts(JSON.parse(cachedData));
      } else {
        try {
          const response = await axios.get("/api/products.php");

          const modifiedData = await Promise.all(
            response.data.map(async (product, index) => {
              const imageBlob = await fetchWithDelay(
                product.image_url,
                index * 500 // delay requests by 500ms per index
              ).then((r) => r.blob());

              return { ...product, image: URL.createObjectURL(imageBlob) };
            })
          );

          setProducts(modifiedData);
          localStorage.setItem("products", JSON.stringify(modifiedData));
        } catch (error) {
          console.error(error);
        }
      }
    }

    getData();
  }, []);

  async function fetchWithDelay(url, delay) {
    await new Promise((resolve) => setTimeout(resolve, delay));
    return axios.get(url);
  }

  return products;
}

// import { useState, useEffect } from "react";
// import axios from "axios";

// export function useProductData() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     async function getData() {
//       const response = await axios.get(
//         "http://localhost/ecommerce-capi/products.php"
//       );
//       setProducts(response.data);
//     }
//     getData();
//   }, []);

//   return products;
// }
