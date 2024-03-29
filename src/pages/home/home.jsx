import React from "react";

import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";
import { toast, ToastContainer } from "react-toastify";

const Home = () => {
  return (
    <>
      <ToastContainer autoClose={3000} position={toast.POSITION.TOP_RIGHT} />
      <Header />
      <Hero />
      <Footer />
    </>
  );
};

export { Home };
