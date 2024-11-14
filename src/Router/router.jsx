import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../Layout";
import { Home } from "../Pages/Home";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};
