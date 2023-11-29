import React from "react";
import { Button, Box, Typography, List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Bar } from "../components/Bar";
import Section from "../components/Section";
import SectionServicios from "../components/SectionServicios";

export const Home = () => {
  const isLoggedIn = false;
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />
      <Box>
        <img className="bg-home" src="./assets/pregrado.jpg" alt="" />
      </Box>
      <Bar
        texto1="Bienvenido a Buggzy"
        texto2="Somos su apoyo en la etapa de aprendizaje"
      />

      <Section />
      <Bar />

      <SectionServicios />
      {/* <Link to="login">Ir al login</Link> */}
    </>
  );
};
