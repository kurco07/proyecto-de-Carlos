// CourseCard.jsx
import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

const CourseCard = ({ backgroundImage, careerText, onClick }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "150px",
        height: "200px",
        borderRadius: "8px",
        overflow: "hidden",
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
      onClick={() => onClick && onClick()} // Llama a la función onClick si está definida
    >
      <img
        src={backgroundImage}
        alt="Carrera"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "40px",
          overflow: "hidden",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "#C5DD4A",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            padding: 1,
          }}
        >
          {careerText}
        </Typography>
      </Box>
    </Box>
  );
};

CourseCard.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  careerText: PropTypes.string.isRequired,
  onClick: PropTypes.func, // Nuevo prop para manejar el clic
};

export default CourseCard;
