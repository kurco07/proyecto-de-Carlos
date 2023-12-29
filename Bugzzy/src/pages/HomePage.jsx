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
import { capitloCursos, obtenerCursos } from "../services/cursos";
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

const HomePage = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [cursos, setCursos] = useState([]);
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

  const verCurso = (curso) => {
    navigate(`/reproductorMP4/${curso}/`);
  };

  useEffect(() => {
    const cargarCursos = async () => {
      const response = await obtenerCursos();
      const playlist = await capitloCursos();
      const getUser = await login(localStorage.getItem("cedula"));
      setCursos({ playlist, response });
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
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>

            <InputBase
              fullWidth
              placeholder="¿ Que quieres aprender hoy ?"
              sx={{ ml: 1, color: "#C5DD4A" }}
              onChange={(e) => e.key === "Enter" && handleSearch()}
            />
          </Box>
          <ProfesorNotofication rol={currentUser.rol} />

          <Box
            display={"flex"}
            gap={"10px"}
            flexDirection={"column"}
            justifyContent={"center"}
            padding={"20px"}
            width={"670px"}
            height={"150px"}
            mt={"20px"}
            bgcolor={"#C5DD4A"}
            borderRadius={"0.75rem"}
          >
            <Typography fontWeight={700}>
              Bienvenido de vuelta {currentUser.usuario}!
            </Typography>

            <Box display={"flex"} alignItems={"center"} gap={"10px"}>
              <SchoolIcon />
              <Typography fontSize={"13px"}>
                {" "}
                {currentUser.rol} | {currentUser.correo_electronico} |{" "}
                {currentUser.usuario}
              </Typography>
            </Box>
            <Box
              onClick={() => navigate("/profile")}
              component={"button"}
              sx={{
                "&:hover": {
                  scale: "1 1.05",
                },
              }}
              color={"#000000"}
              display={"flex"}
              alignItems={"center"}
            >
              <Typography borderBottom={"1px solid #000000"} fontSize="12px">
                Configurar perfil
              </Typography>
              <ArrowForwardIosIcon sx={{ ml: "5px" }} fontSize="" />
            </Box>
          </Box>
        </>
        <Box
          width={"670px"}
          pt={"20px"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h5" color={"white"}>
            Ultimos cursos agregados
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
                {cursos.response
                  .slice(0, 4)
                  .map(
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
                        {/* Aquí puedes colocar la imagen y los detalles del curso */}

                        <img
                          style={{
                            borderTopRightRadius: "0.75rem",
                            borderBottomRightRadius: "0.75rem",
                          }}
                          width={300}
                          src={miniatura}
                        ></img>
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
                            12 Clases | Certificado de finalizacion
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
            </>
          )}
        </Box>
        {/* Sección de Testimonios */}
        <Box mt={"15px"} width={"670px"}>
          <Typography
            color={"white"}
            mb={"20px"}
            variant="h5"
            align="left"
            gutterBottom
          >
            Lo que dicen nuestros estudiantes
          </Typography>
          <Grid container spacing={3}>
            {/* Testimonio 1 */}
            <Grid item xs={12} sm={4}>
              {/* Puedes colocar la imagen del testimonio y el texto */}
              <Box
                display={"flex"}
                flexDirection={"column"}
                borderRadius={"0.75rem"}
                justifyContent={"center"}
                height={"300px"}
                padding={"10px"}
                color={"white"}
                bgcolor={"#0288d1"}
                textAlign="center"
              >
                <Typography fontWeight={"700"} variant="subtitle1" gutterBottom>
                  Juanito
                </Typography>
                <Typography variant="subtitle2">
                  "Excelente plataforma, aprendí mucho y la recomendaré a mis
                  amigos."
                </Typography>
                <Box
                  sx={{
                    "&:hover": {
                      transition: "all 1s",
                      scale: "1.05",
                    },
                  }}
                  color={"gold"}
                >
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              {/* Puedes colocar la imagen del testimonio y el texto */}
              <Box
                display={"flex"}
                flexDirection={"column"}
                borderRadius={"0.75rem"}
                justifyContent={"center"}
                height={"300px"}
                padding={"10px"}
                color={"white"}
                bgcolor={"#0288d1"}
                textAlign="center"
              >
                <Typography fontWeight={"700"} variant="subtitle1" gutterBottom>
                  Pedrito
                </Typography>
                <Typography variant="subtitle2">
                  "Me gusta mucho la variedad que hay, encontre lo que buscaba"
                </Typography>
                <Box
                  sx={{
                    "&:hover": {
                      transition: "all 1s",
                      scale: "1.05",
                    },
                  }}
                  color={"gold"}
                >
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              {/* Puedes colocar la imagen del testimonio y el texto */}
              <Box
                display={"flex"}
                flexDirection={"column"}
                borderRadius={"0.75rem"}
                justifyContent={"center"}
                height={"300px"}
                padding={"10px"}
                color={"white"}
                bgcolor={"#0288d1"}
                textAlign="center"
              >
                <Typography fontWeight={"700"} variant="subtitle1" gutterBottom>
                  Sarita
                </Typography>
                <Typography variant="subtitle2">
                  "Recomendado, los profesores responden a las preguntas de los
                  comentarios"
                </Typography>
                <Box
                  sx={{
                    "&:hover": {
                      transition: "all 1s",
                      scale: "1.05",
                    },
                  }}
                  color={"gold"}
                >
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarBorderIcon />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Contenido de "Acerca de Nosotros" */}
        <Box mt={3} width={"670px"}>
          <Typography color={"white"} variant="h6" align="left" gutterBottom>
            Acerca de Nosotros
          </Typography>
          <Box
            sx={{
              transition: "all .5s",

              "&:hover": {
                transition: "all .5s",
                boxShadow: "-10px -10px 10px #FAD8D530",
              },
            }}
            mb={"10px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            padding={"30px"}
            bgcolor={"#FAD8D5"}
            borderRadius={"0.75rem"}
          >
            <Typography variant="subtitle2" align="center">
              Somos una plataforma dedicada a proporcionar educación en línea de
              alta calidad. Nuestra misión es facilitar el acceso a cursos
              impartidos por instructores expertos en diversos campos.
            </Typography>
          </Box>

          {/* Información Adicional */}
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  transition: "all .5s",

                  "&:hover": {
                    transition: "all .5s",
                    boxShadow: "-10px -10px 10px #FAD8D530",
                  },
                }}
                height={"250px"}
                mb={"10px"}
                flexDirection={"column"}
                display={"flex"}
                justifyContent={"initial"}
                padding={"30px"}
                bgcolor={"#FAD8D5"}
                borderRadius={"0.75rem"}
              >
                <Typography fontWeight={700} variant="subtitle1" align="left">
                  Nuestra Historia
                </Typography>
                <Typography variant="subtitle2" align="left">
                  Desde nuestro inicio, nos hemos comprometido a ofrecer a
                  nuestros estudiantes una experiencia educativa enriquecedora.
                  Con un enfoque en la calidad, diversidad y accesibilidad,
                  hemos crecido para convertirnos en una plataforma líder en
                  educación en línea.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  transition: "all .5s",

                  "&:hover": {
                    transition: "all .5s",
                    boxShadow: "10px 10px 10px #FAD8D530",
                  },
                }}
                mb={"10px"}
                height={"250px"}
                flexDirection={"column"}
                display={"flex"}
                justifyContent={"initial"}
                padding={"30px"}
                bgcolor={"#FAD8D5"}
                borderRadius={"0.75rem"}
              >
                <Typography variant="subtitle1" fontWeight={700} align="left">
                  Nuestro Equipo
                </Typography>
                <Typography variant="subtitle2" align="justify">
                  Contamos con un equipo de instructores y profesionales
                  apasionados que están dedicados a brindar el mejor contenido
                  educativo. Nos esforzamos por crear un entorno en el que los
                  estudiantes puedan aprender y crecer.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Contenido de "Staff" */}

        <Box mt={3}>
          <Typography color={"white"} variant="h6" align="left">
            Desarolladores
          </Typography>

          {/* Lista de Miembros del Staff */}
          <Grid mb={10} width={"670px"} container spacing={3}>
            {staffMembers.map((member, index) => (
              <Grid width={3} item xs={12} md={4} key={index}>
                <Box
                  sx={{
                    transition: "all .5s",

                    "&:hover": {
                      transition: "all .5s",
                      boxShadow: "10px 10px 10px #ffffff10",
                    },
                  }}
                  display={"flex"}
                  gap={"10px"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  height={"250px"}
                  width={"210px"}
                  mt={"10px"}
                  padding={"20px"}
                  borderRadius={"0.75rem"}
                  color={"white"}
                  bgcolor={"InfoText"}
                  textAlign="center"
                >
                  <Typography
                    color={"#C5DD4A"}
                    fontWeight={700}
                    fontSize={"14px"}
                  >
                    {member.name}
                  </Typography>
                  <Typography fontSize={"13px"} color="#ffffff60">
                    {member.position}
                  </Typography>
                  <Typography fontSize={"12px"}>{member.bio}</Typography>

                  <Box display={"flex"} gap={"10px"} mt={"5px"}>
                    <GitHubIcon
                      sx={{
                        transition: "all .5s",

                        "&:hover": {
                          transition: "all .5s",
                          color: "#C5DD4A",
                        },
                      }}
                    />
                    <LinkedInIcon
                      sx={{
                        transition: "all .5s",

                        "&:hover": {
                          transition: "all .5s",
                          color: "#C5DD4A",
                        },
                      }}
                    />
                    <InstagramIcon
                      sx={{
                        transition: "all .5s",

                        "&:hover": {
                          transition: "all .5s",
                          color: "#C5DD4A",
                        },
                      }}
                    />
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <Backdrop
        open={open}
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default HomePage;
