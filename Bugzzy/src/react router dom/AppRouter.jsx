import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import Register from "../pages/Register";
import Reset from "../pages/Reset";
import HomePage from "../pages/HomePage";

const AppRouter = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route index path="/login" element={<Login />} />
      <Route index path="/register" element={<Register />} />
      <Route index path="/reset" element={<Reset />} />
      <Route index path="/homepage" element={<HomePage />} />
    </Routes>
  );
};

export default AppRouter;
