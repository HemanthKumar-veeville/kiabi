import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import your components
import HomePage from "./pages/Home";
import ProductPage from "./pages/Product";
import NotFoundPage from "./pages/NotFoundPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Define the routes */}
        <Route path="/" element={<HomePage />} /> {/* Home Page */}
        <Route path="/product" element={<ProductPage />} /> {/* Product List Page */}
        <Route path="/product/:productId" element={<ProductPage />} /> {/* Product Detail Page */}
        <Route path="*" element={<NotFoundPage />} /> {/* 404 Page */}
      </Routes>
    </Router>
  );
};

export default App;
