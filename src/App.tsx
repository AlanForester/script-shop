import React, { useRef } from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import { ROUTES } from "./shared/lib/constants/routes";
import { MainLayout } from "./layouts/MainLayout";
import { ProductsGallery } from "./pages/ProductsGallery";
import { Product } from "./pages/Product";
import { useTelegram } from "./shared/lib/hooks";
import Orders from "./pages/Orders/ui/Orders";

const App = () => {
  const userIdParam = new URLSearchParams(window.location.search).get("userId");
  const userId = useRef(userIdParam);
  const { expandApp } = useTelegram();
  expandApp();

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={ROUTES.PRODUCTS} element={<ProductsGallery />} />
        <Route path={ROUTES.PRODUCT} element={<Product />} />
        <Route path={ROUTES.ORDERS} element={<Orders />} />
        <Route path="*" element={<Navigate to={ROUTES.PRODUCTS} replace />} />
      </Route>
    </Routes>
  );
};

export default App;
