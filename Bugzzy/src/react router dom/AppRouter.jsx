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
  // Define tus imágenes y etiquetas aquí
  const images = [
    { src: 'https://i1.sndcdn.com/artworks-jed24yeHGhe9LXDz-ZRaA5A-t500x500.jpg', label: 'Etiqueta 1' },
    { src: 'https://t2.ea.ltmcdn.com/es/posts/4/2/1/el_erizo_como_mascota_2124_600_square.jpg', label: 'Etiqueta 2' },
    { src: 'https://i.pinimg.com/736x/09/1d/85/091d8519fd798d73f21823ddaac2d34d.jpg', label: 'Etiqueta 3' },
  ];

  return (
    <Routes>
      <Route index path="/" element={<Landing />} />
      <Route index path="/login" element={<Login />} />   
      <Route index path="/register" element={<Register />} />
      <Route index path="/reset" element={<Reset />} />
      <Route index path="/homepage" element={<HomePage />} />
      <Route index path="/mycourses" element={<MyCourses />} />
      <Route index path="/reproductormp4" element={<ReproductorMP4 title="Titulo" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." labelText="Nombre del Curso" secondLabelText="Título Capitulo Curso" thirdLabelText="Nombre Profesor Curso" images={images} />} />
    </Routes>
  );
};

export default AppRouter;
