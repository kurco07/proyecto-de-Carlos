import React from "react";
import { Box, Drawer, List, ListItem, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import {
  capitloCursos,
  obtenerCursos,
  obtenerCursosIniciado,
} from "../services/cursos";
import { useState, useEffect } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const MyCourses = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const navigate = useNavigate();
  const verCurso = async (curso) => {
    navigate(`/reproductorMP4/${curso}/`);
  };

  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const cargarCursos = async () => {
      try {
        const response = await obtenerCursos();
        const iniciadosResponse = await obtenerCursosIniciado();
        const playlist = await capitloCursos();

        // Obtener los cursos del profesor actual
        const filterResponse = response.filter(
          ({ cedulaCreador }) =>
            cedulaCreador === localStorage.getItem("cedula")
        );
        const filterIniciados = iniciadosResponse.filter(
          ({ cedulaEstudiante }) =>
            cedulaEstudiante === localStorage.getItem("cedula")
        );
        const filterPlayList = playlist.filter(({ idPublicacion }) =>
          filterResponse.some((curso) => curso.idPublicacion === idPublicacion)
        );

        // Obtener los cursos iniciados del usuario actual
        const cursosIniciadosUsuario = filterIniciados.map(
          ({ idPublicacion }) =>
            response.find((curso) => curso.idPublicacion === idPublicacion)
        );

        setCursos({
          response,
          filterResponse,
          cursosIniciadosUsuario,
          filterPlayList,
          playlist,
        });
      } catch (error) {
        console.error(error);
      }
    };

    cargarCursos();
  }, []);
  console.log(cursos);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const isLoggedIn = true;

  return (
    <div
      style={{
        height: "auto",
        backgroundColor: "#121f3d",
        marginTop: "-30px",
        paddingBottom: "20px",
      }}
    >
      {/* Barra de Navegación */}
      <Navbar isLoggedIn={isLoggedIn} />

      {/* Drawer */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerClose}>
        <List>
          <ListItem
            button
            onClick={handleDrawerClose}
            component={RouterLink}
            to="/"
          >
            Inicio
          </ListItem>
          <ListItem
            button
            onClick={handleDrawerClose}
            component={RouterLink}
            to=""
          >
            Mis Cursos
          </ListItem>
        </List>
      </Drawer>

      {/* Contenido Principal */}

      {/* Sección de Seguir Viendo */}
      <Box mt={"90px"} width={"100%"}>
        <Box
          width={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <Typography width={"670px"} pt={"20px"} variant="h6" color={"white"}>
            Cursos en progreso
          </Typography>
          {/* Secciones de Cursos Destacados */}
          {cursos.response && (
            <>
              <Box
                width={"670px"}
                mt={"20px"}
                display={"flex"}
                flexDirection={"row"}
                flexWrap={"wrap"}
                gap={"10px"}
              >
                {cursos.cursosIniciadosUsuario.map(
                  ({
                    idPublicacion,
                    tituloPublicacion,
                    descripcionPublicacion,
                    miniatura,
                  }) => {
                    const cantidadVideos = cursos.playlist.filter(
                      (video) => video.idPublicacion === idPublicacion
                    ).length;
                    return (
                      <Box
                        sx={{
                          transition: "all .5s",
                          "&:hover": {
                            transform: "scale(1.009)",
                            boxShadow: "0px 5px 10px #ffffff50",
                            cursor: "pointer",
                            transition: "all .5s",
                          },
                        }}
                        height={"360px"}
                        key={idPublicacion}
                        border={"1px solid #24385b"}
                        borderRadius={"0.75rem"}
                        display={"flex"}
                        width={"45%"}
                        flexDirection={"row-reverse"}
                      >
                        {/* Aquí puedes colocar la imagen y los detalles del curso */}

                        <Box
                          display={"flex"}
                          flexDirection={"column"}
                          justifyContent={"center"}
                          color={"white"}
                          width={"100%"}
                          padding={"20px"}
                          gap={"10px"}
                        >
                          <img
                            style={{
                              borderRadius: "0.75rem",
                            }}
                            src={miniatura}
                          ></img>
                          <Typography color={"#C5DD4A"} variant="subtitle1">
                            {tituloPublicacion}
                          </Typography>
                          <Typography fontSize={"10px"} color={"#8da2c0"}>
                            {cantidadVideos} Clases | Certificado de
                            finalizacion
                          </Typography>
                          <Typography fontSize={"13px"} color={"#becde3"}>
                            {descripcionPublicacion.slice(0, 150)}...
                          </Typography>

                          <Box display={"flex"}>
                            <Typography
                              fontSize={"13px"}
                              sx={{
                                color: "#33b1ff",
                                "&:hover": {
                                  bgcolor: "#33b1ff00",

                                  scale: "1.02",
                                },
                              }}
                              onClick={() => verCurso(idPublicacion)}
                              component={"button"}
                            >
                              Continuar viendo
                              <ArrowForwardIcon fontSize="small" />
                            </Typography>
                            <CheckCircleIcon />
                          </Box>
                        </Box>
                      </Box>
                    );
                  }
                )}
              </Box>
            </>
          )}
        </Box>
      </Box>
      <Box />
    </div>
  );
};

export default MyCourses;
