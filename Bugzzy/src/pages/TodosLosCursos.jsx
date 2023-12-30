import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  InputBase,
  Typography,
} from "@mui/material";
import { Navbar } from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import {
  capitloCursos,
  iniciarCurso,
  obtenerCursos,
  obtenerCursosIniciado,
} from "../services/cursos";
import { useState, useEffect } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import SearchIcon from "@mui/icons-material/Search";
import SchoolIcon from "@mui/icons-material/School";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import StarIcon from "@mui/icons-material/Star";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { login } from "../services/usuarios";
import ProfesorNotofication from "../components/ProfesorNotofication";

const isLoggedIn = true;

const TodosLosCursos = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [cursos, setCursos] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const [currentUser, setCurrentUser] = useState({});
  const staffMembers = [
    {
      name: "Carlos Ternera",
      position: "FullStack Developer",
      bio: "Estudiante de 8vo semestre de ingenieria de sistemas.",
    },

    {
      name: "Pedro Liccioni",
      position: "Frontend Developer",
      bio: "En cada commit que hacia se caia la app.",
    },

    {
      name: "Mauricio Rodriguez",
      position: "UI/UX Developer",
      bio: "Estudiante de 8vo semestre de ingenieria informatica.",
    },

    {
      name: "Sarai Herrera",
      position: "Frontend Developer",
      bio: "Estudiante de 8vo semestre de ingenieria informatica.",
    },

    {
      name: "Tabata Vega",
      position: "Backend Developer",
      bio: "Estudiante de 8vo semestre de ingenieria informatica.",
    },
    // Puedes agregar más miembros aquí
  ];
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
      setCurrentUser(getUser);
    };

    cargarCursos();
    setOpen(false);
  }, []);
  const handleSearch = () => {
    console.log("Realizar búsqueda...");
  };
  console.log(cursos, currentUser);

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
            <IconButton
              onClick={() => navigate(`/cursos/${busqueda}`)}
              color="inherit"
            >
              <SearchIcon />
            </IconButton>

            <InputBase
              fullWidth
              placeholder="¿ Que quieres aprender hoy ?"
              sx={{ ml: 1, color: "#C5DD4A" }}
              onChange={({ target }) => setBusqueda(target.value)}
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
          {cursos.response && (
            <>
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
                      >
                        {/* Aquí puedes colocar la imagen y los detalles del curso */}

                        <img
                          style={{
                            borderRadius: "0.50rem",
                          }}
                          width={"150px"}
                          src={miniatura}
                        ></img>
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
