import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/home/home";
import { Login } from "./pages/login/login";
import { CartPage } from "./pages/cart/cart";
import { Account } from "./pages/account/account";
import { Products } from "./pages/products/products";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const urlSearchParams = new URLSearchParams(window.location.search);
  const query = urlSearchParams.get("q");
  if (query) {
    setSearchQuery(query);
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/account" element={<Account />} />
        <Route
          path="/products"
          element={<Products searchQuery={searchQuery} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
