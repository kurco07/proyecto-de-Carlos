import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import Register from "../pages/Register";
import Reset from "../pages/Reset";

const AppRouter = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route index path="/login" element={<Login />} />
      <Route index path="/register" element={<Register />} />
      <Route index path="/reset" element={<Reset />} />
    </Routes>
  );
};

export default AppRouter;
