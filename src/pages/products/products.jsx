import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProductGrid } from "../../components/ProductGrid/ProductGrid";
import { useLocation } from "react-router-dom";

const Products = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("search");

  return (
    <>
      <Header />
      <ToastContainer autoClose={3000} position={toast.POSITION.TOP_RIGHT} />
      <ProductGrid searchQuery={searchQuery} />
      <Footer />
    </>
  );
};

export { Products };
