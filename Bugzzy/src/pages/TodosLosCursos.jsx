import {
  Box,
  Container,
  IconButton,
  InputBase,
  Typography,
} from "@mui/material";
import { Navbar } from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import {
  capitloCursos,
  iniciarCurso,
  obtenerCursos,
  obtenerCursosIniciado,
} from "../services/cursos";
import { useState, useEffect } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SearchIcon from "@mui/icons-material/Search";

import { login } from "../services/usuarios";
import ProfesorNotofication from "../components/ProfesorNotofication";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { useParams } from "react-router-dom";

const isLoggedIn = true;

const TodosLosCursos = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [cursos, setCursos] = useState([]);
  const { input } = useParams();
  const [busqueda, setBusqueda] = useState("");
  const [filterResponse, setFilterResponse] = useState([]);

  const [currentUser, setCurrentUser] = useState({});
  const verCurso = async (curso) => {
    // Verificar si el curso ya está iniciado
    const cursoIniciado = cursos.filterIniciados.find(
      ({ idPublicacion }) => idPublicacion === curso
    );

    if (cursoIniciado) {
      console.log(cursoIniciado.idPublicacion, curso);
      navigate(`/reproductorMP4/${curso}/`);
      return;
    }

    // Si el curso no está iniciado, llamar a la API para iniciarlo
    try {
      const response = await iniciarCurso({
        estado: true,
        idPublicacion: curso,
        cedulaEstudiante: currentUser.cedula,
      });
      console.log(response);

      if (response.cedulaEstudiante === localStorage.getItem("cedula")) {
        navigate(`/reproductorMP4/${curso}/`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const buscar = (valor) => {
    setBusqueda(valor);
    setFilterResponse(() =>
      cursos.response.filter(
        ({ tituloPublicacion, descripcionPublicacion }) =>
          tituloPublicacion
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(
              valor
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
            ) ||
          descripcionPublicacion
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(
              valor
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
            )
      )
    );

    console.log(filterResponse);
  };

  useEffect(() => {
    const cargarCursos = async () => {
      const response = await obtenerCursos();
      const playlist = await capitloCursos();
      const getUser = await login(localStorage.getItem("cedula"));
      const iniciadosResponse = await obtenerCursosIniciado();

      const filterIniciados = iniciadosResponse.filter(
        ({ cedulaEstudiante }) =>
          cedulaEstudiante === localStorage.getItem("cedula")
      );

      const cantidadVideos = response.map((curso) => {
        const videos = playlist.filter(
          ({ idPublicacion }) => idPublicacion === curso.idPublicacion
        );
        return videos.length;
      });

      setCursos({
        playlist,
        response,
        cantidadVideos,
        filterIniciados,
      });
      setFilterResponse(response);
      setCurrentUser(getUser);
    };

    cargarCursos();
    setOpen(false);
    setBusqueda(input);
  }, [input]);

  return (
    <div
      style={{
        backgroundColor: "#13161c",
        minHeight: "700px",
        paddingBottom: "20px",
      }}
    >
      {/* Barra de Navegación */}
      <Navbar isLoggedIn={isLoggedIn} />

      {/* Contenido Principal */}
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/*prueba*/}
        <>
          <Box
            border={"1px solid #2d323a"}
            borderRadius={"0.75rem"}
            color={"#C5DD4A"}
            mt={"90px"}
            width={"670px"}
            display={"flex"}
          >
            {busqueda && (
              <IconButton
                onClick={() => {
                  setBusqueda("");
                  setFilterResponse(cursos.response);
                }}
                color="inherit"
              >
                <RestartAltIcon />
              </IconButton>
            )}

            {!busqueda && (
              <IconButton color="inherit">
                <SearchIcon />
              </IconButton>
            )}
            <InputBase
              fullWidth
              value={busqueda}
              placeholder="¿ Que quieres aprender hoy ?"
              sx={{ ml: 1, color: "#C5DD4A" }}
              onChange={({ target }) => buscar(target.value)}
            />
          </Box>
          <ProfesorNotofication rol={currentUser.rol} />
        </>
        <Box
          width={"670px"}
          pt={"20px"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h5" color={"white"}>
            Todos los cursos
          </Typography>
          <Box
            component={"button"}
            sx={{
              "&:hover": {
                scale: "1.05",
              },
            }}
            color={"white"}
            display={"flex"}
            alignItems={"center"}
            onClick={() => navigate("/cursos-progreso")}
          >
            <Typography borderBottom={"1px solid #ffffff60"} fontSize="12px">
              Cursos en progreso
            </Typography>
            <ArrowForwardIosIcon sx={{ ml: "5px" }} fontSize="" />
          </Box>
        </Box>
        <Box
          width={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {/* Secciones de Cursos Destacados */}
          {filterResponse && (
            <>
              <Box
                width={"670px"}
                mt={"20px"}
                display={"flex"}
                flexDirection={"column"}
                gap={"10px"}
              >
                {filterResponse.map(
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
                        height={"120px"}
                        key={idPublicacion}
                        bgcolor={"#1e2229"}
                        borderRadius={"0.75rem"}
                        display={"flex"}
                        flexDirection={"row"}
                        padding={"15px"}
                        sx={{
                          transition: "all .5s",
                          "&:hover": {
                            transform: "scale(1.009)",
                            cursor: "pointer",
                            transition: "all .5s",
                            bgcolor: "#ffffff20",
                          },
                        }}
                      >
                        {/* Aquí puedes colocar la imagen y los detalles del curso */}

                        <img
                          style={{
                            borderRadius: "0.50rem",
                          }}
                          width={"150px"}
                          src={miniatura}
                        ></img>
                        <PlayCircleIcon
                          fontSize="large"
                          sx={{
                            position: "absolute",
                            ml: "60px",
                            mt: "30px",
                          }}
                          color="action"
                        />

                        <Box
                          display={"flex"}
                          flexDirection={"column"}
                          justifyContent={"center"}
                          color={"white"}
                          width={"100%"}
                          padding={"20px"}
                          gap={"5px"}
                        >
                          <Box
                            display={"flex"}
                            alignItems={"center"}
                            gap={"10px"}
                          >
                            <Typography color={"#C5DD4A"} variant="subtitle1">
                              {tituloPublicacion}
                            </Typography>

                            <Typography fontSize={"10px"} color={"#ffffff70"}>
                              {cantidadVideos}
                              {" Clases "}| Certificado de finalizacion
                            </Typography>
                          </Box>
                          <Typography fontSize={"13px"} color={"#c4c8ce"}>
                            {descripcionPublicacion.slice(0, 120)}...
                          </Typography>

                          <Typography
                            fontSize={"13px"}
                            textAlign={"left"}
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
                            Ver curso
                            <ArrowForwardIcon fontSize="small" />
                          </Typography>
                        </Box>
                      </Box>
                    );
                  }
                )}
              </Box>
            </>
          )}
        </Box>
      </Container>
    </div>
  );
};

export default TodosLosCursos;
