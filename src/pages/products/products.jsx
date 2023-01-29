import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProductGrid } from "../../components/ProductGrid/ProductGrid";

const Products = () => {
  return (
    <>
      <Header />
      <ToastContainer autoClose={3000} position={toast.POSITION.TOP_RIGHT} />
      <ProductGrid />
      <Footer />
    </>
  );
};

export { Products };
