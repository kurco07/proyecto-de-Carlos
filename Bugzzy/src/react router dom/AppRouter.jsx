import React from "react";
import { Route, Routes } from "react-router-dom";
import { Landing } from "../pages/Landing";
import { Login } from "../pages/Login";
import Register from "../pages/Register";
import ReproductorMP4 from "../pages/ReproductorMP4";
import Reset from "../pages/Reset";
import HomePage from "../pages/HomePage";
import MyCourses from "../pages/MyCourses";


const AppRouter = () => {
  return (
    <Routes>
      <Route index path="/" element={<Landing />} />
      <Route index path="/login" element={<Login />} />   
      <Route index path="/register" element={<Register />} />
      <Route index path="/reset" element={<Reset />} />
      <Route index path="/homepage" element={<HomePage />} />
      <Route index path="/mycourses" element={<MyCourses />} />
      <Route index path="/reproductormp4" element={<ReproductorMP4/>} />
    </Routes>
  );
};

export default AppRouter;
