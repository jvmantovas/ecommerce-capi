import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/home/home";
import { Login } from "./pages/login/login";
import { CartPage } from "./pages/cart/cart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
