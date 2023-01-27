import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { LoginSection } from "../../components/LoginSection/LoginSection";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  return (
    <>
      <Header />
      <ToastContainer autoClose={3000} position={toast.POSITION.TOP_RIGHT} />
      <LoginSection />
      <Footer />
    </>
  );
};

export { Login };
