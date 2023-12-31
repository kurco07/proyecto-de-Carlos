import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Navbar } from "../components/Navbar";
import CourseCard from "../components/CourseCard";
import VerCursos from "../components/VerCursos"; // Cambié el nombre del componente

const isLoggedIn = true;

const Courses = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (careerText) => {
    setSelectedCard(careerText);
  };

  const careerInfo = {
    "Espacio de Ingeniería": {
      title: "Ingeniería",
      description:
        "Aquí encontrarás información sobre la carrera de Ingeniería.",
    },
    "Espacio de Derecho": {
      title: "Derecho",
      description: "Descubre todo sobre la carrera de Derecho en esta sección.",
    },
    "Espacio de Economía": {
      title: "Economía",
      description: "Conoce más sobre la carrera de Economía y sus detalles.",
    },
  };

  return (
    <div style={{ backgroundColor: "#13161c", minHeight: "100vh" }}>
      {/* Barra de Navegación */}
      <Navbar isLoggedIn={isLoggedIn} />

      {/* Contenido centrado */}
      <Box
        sx={{
          maxWidth: "670px",
          margin: "60px auto 0",
          padding: "20px",
          display: "flex",
          justifyContent: "space-around",
          gap: "8px",
          flexWrap: "wrap",
        }}
      >
        <CourseCard
          backgroundImage="./assets/amigos.jpeg"
          careerText="Ingeniería"
          onClick={() => handleCardClick("Espacio de Ingeniería")}
        />
        <CourseCard
          backgroundImage="./assets/amigos.jpeg"
          careerText="Derecho"
          onClick={() => handleCardClick("Espacio de Derecho")}
        />
        <CourseCard
          backgroundImage="./assets/amigos.jpeg"
          careerText="Economía"
          onClick={() => handleCardClick("Espacio de Economía")}
        />
      </Box>

      {/* Sección "Bienvenido al Espacio de..." */}
      {selectedCard && (
        <Box
          sx={{
            maxWidth: "670px",
            margin: "20px auto",
            padding: "20px",
            backgroundColor: "#C5DD4A",
            borderRadius: "8px",
          }}
        >
          <Typography
            fontWeight={700}
          >{`Bienvenido al ${selectedCard}`}</Typography>
          <p>{`Debajo encontrarás toda la información relacionada`}</p>
        </Box>
      )}

      {/* Mostrar información específica de la carrera seleccionada */}
      {selectedCard && (
        <Box
          sx={{
            color: "white",
            maxWidth: "670px",
            margin: "20px auto",
            padding: "20px",
          }}
        >
          {/* Agregar el componente Vercursos para mostrar todos los cursos */}
          <VerCursos />
        </Box>
      )}
    </div>
  );
};

export default Courses;
