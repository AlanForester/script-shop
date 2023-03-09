import React, { useRef } from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import { ROUTES } from "./shared/lib/constants/routes";
import { MainLayout } from "./layouts/MainLayout";
import { ProductsGallery } from "./widgets/ProductsGallery";

// @ts-ignore
const tg = window.Telegram.WebApp;

tg.expand();

const App = () => {
  const userIdParam = new URLSearchParams(window.location.search).get("userId");
  const userId = useRef(userIdParam);

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path={ROUTES.PRODUCTS}
          element={<ProductsGallery userId={userId.current} />}
        />
        <Route path={ROUTES.OFFERS} element={<div>ADIDAS</div>} />
        <Route path={ROUTES.ABOUT} element={<div>ABOUT</div>} />
        <Route path={ROUTES.CONTACTS} element={<div>CONTACTS</div>} />
        <Route path="*" element={<Navigate to={ROUTES.PRODUCTS} replace />} />
      </Route>
    </Routes>
  );
};

export default App;
