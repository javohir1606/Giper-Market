import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../Layout";
import { Home } from "../Pages/Home";
import { CatalogDatas } from "../Pages/Catalog-Datas/catalog-datas";
import { HomeDetail } from "../Components/HomeDetail";
import { CartProduct } from "../Components/Cart-Product";
import { Register } from "../Components/Register";

export const Router = () => {
  return (
    <Routes>
      <Route path="register" element={<Register />} />
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="home-detail/:id" element={<HomeDetail />} />
        <Route path="cart-product" element={<CartProduct />} />
        <Route path="catalog/:name/:text" element={<CatalogDatas />} />
      </Route>
    </Routes>
  );
};
