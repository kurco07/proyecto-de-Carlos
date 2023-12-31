import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { capitloCursos, obtenerCursos } from "../services/cursos";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import { useNavigate } from "react-router-dom";

const VerCursos = () => {
  const navigate = useNavigate();
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const cargarCursos = async () => {
      const response = await obtenerCursos();
      const playlist = await capitloCursos();
      setCursos({ playlist, response });
    };

    cargarCursos();
  }, []);

  const verCurso = (curso) => {
    navigate(`/reproductorMP4/${curso}/0`);
  };

  return (
    <Box
      width={"100%"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      {cursos.response && (
        <Box
          width={"670px"}
          mt={"20px"}
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
        >
          {cursos.response.map(
            ({
              idPublicacion,
              tituloPublicacion,
              descripcionPublicacion,
              miniatura,
            }) => (
              <Box
                height={"260px"}
                key={idPublicacion}
                bgcolor={"#1e2229"}
                borderRadius={"0.75rem"}
                display={"flex"}
                flexDirection={"row-reverse"}
              >
                <img
                  style={{
                    borderTopRightRadius: "0.75rem",
                    borderBottomRightRadius: "0.75rem",
                  }}
                  width={300}
                  src={miniatura}
                  alt={tituloPublicacion}
                />
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  color={"white"}
                  width={"100%"}
                  padding={"20px"}
                  gap={"10px"}
                  zIndex={"999"}
                  boxShadow={"10px 0px 15px #00000090"}
                >
                  <SlowMotionVideoIcon color="info" />
                  <Typography color={"#C5DD4A"} variant="subtitle1">
                    {tituloPublicacion}
                  </Typography>
                  <Typography fontSize={"10px"} color={"#ffffff70"}>
                    12 Clases | Certificado de finalización
                  </Typography>
                  <Typography fontSize={"13px"} color={"#c4c8ce"}>
                    {descripcionPublicacion.slice(0, 100)}...
                  </Typography>
                  <Button
                    sx={{
                      bgcolor: "white",
                      color: "black",
                      width: "130px",
                      "&:hover": {
                        bgcolor: "#ffffff",
                        scale: "1.02",
                      },
                    }}
                    onClick={() => verCurso(idPublicacion)}
                    size="small"
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                  >
                    Ir al curso
                  </Button>
                </Box>
              </Box>
            )
          )}
        </Box>
      )}
    </Box>
  );
};

export default VerCursos;
