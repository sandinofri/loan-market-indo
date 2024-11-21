import React from "react";
import MainLayout from "./mainLayouts/MainLayout";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="product" element={<Product />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
