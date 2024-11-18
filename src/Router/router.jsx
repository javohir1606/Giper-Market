import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../Layout";
import { Home } from "../Pages/Home";
import { CatalogDatas } from "../Pages/Catalog-Datas/catalog-datas";
import { HomeDetail } from "../Components/HomeDetail";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="home-detail/:id" element={<HomeDetail />} />
        <Route path="catalog/:name/:text" element={<CatalogDatas />} />
      </Route>
    </Routes>
  );
};
