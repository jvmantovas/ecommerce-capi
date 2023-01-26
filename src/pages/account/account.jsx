import React from "react";

import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { MyAccount } from "../../components/MyAccount/MyAccount";

const Account = () => {
  return (
    <>
      <Header />
      <MyAccount />
      <Footer />
    </>
  );
};

export { Account };
