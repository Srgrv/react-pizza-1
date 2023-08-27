import React from "react";
import { Routes, Route } from "react-router-dom";

//components
import { Layout } from "./components";

//pages
import { HomePage, CartPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
}

export default App;

//propTypes библиотека
