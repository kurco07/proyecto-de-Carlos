import React from "react";
import { Button, Box, Typography, List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Bar } from "../components/Bar";
import Section from "../components/Section";
import SectionServicios from "../components/SectionServicios";

export const Landing = () => {
  const isLoggedIn = false;
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />
      <Box>
        <img className="bg-home" src="./assets/pregrado.jpg" alt="" />
      </Box>
      <Bar
        texto1="BIENVENIDO A BUGGZY"
        texto2="SOMOS SU APOYO EN LA ETAPA DE APRENDIZAJE"
      />

      <Section />
      <Bar />

      <SectionServicios />
      {/* <Link to="login">Ir al login</Link> */}
    </>
  );
};
