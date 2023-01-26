import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/home/home";
import { Login } from "./pages/login/login";
import { CartPage } from "./pages/cart/cart";
import { Account } from "./pages/account/account";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
}

export default App;
