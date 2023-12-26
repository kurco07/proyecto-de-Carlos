import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Navbar } from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { capitloCursos, obtenerCursos } from "../services/cursos";
import { useState, useEffect } from "react";
const isLoggedIn = true;

const HomePage = () => {
  const navigate = useNavigate();
  const [cursos, setCursos] = useState([]);
  const staffMembers = [
    {
      name: "Nombre del Miembro",
      position: "Cargo del Miembro",
      bio: "Breve biografía o descripción del miembro.",
    },
    // Puedes agregar más miembros aquí
  ];

  const verCurso = (curso) => {
    navigate(`/reproductorMP4/${curso}/0`);
  };

  useEffect(() => {
    const cargarCursos = async () => {
      const response = await obtenerCursos();
      const playlist = await capitloCursos();
      setCursos({ playlist, response });
    };

    cargarCursos();
  }, []);

  console.log(cursos);

  return (
    <div>
      {/* Barra de Navegación */}
      <Navbar isLoggedIn={isLoggedIn} />

      {/* Contenido Principal */}
      <Container sx={{ marginTop: "65px" }}>
        {/*prueba*/}

        <Box mt={3} position="relative">
          {/* Imagen centrada */}
          <Box t>
            <img
              className="img-home"
              src="./assets/pregrado.jpg"
              alt="Imagen Bienvenida"
              style={{ width: "100%", height: "50vh" }}
            />

            {/* Botón "Explorar Cursos" */}
            <Button
              variant="contained"
              color="primary"
              style={{
                position: "absolute",
                bottom: "20%",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 1,
              }}
            >
              Explorar Cursos
            </Button>

            {/* Mensaje de Bienvenida y Descripción */}
            <Box
              position="absolute"
              textAlign="center"
              color="white"
              display="flex"
              top="10%"
              left="25%"
              flexDirection="column"
            >
              <Typography variant="h4" gutterBottom>
                Bienvenido a Tu Plataforma
              </Typography>
              <Typography variant="h6" paragraph>
                Descubre cursos en línea de alta calidad con instructores
                expertos.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Secciones de Cursos Destacados */}
        {cursos.response && (
          <>
            <Grid container spacing={3} mt={"10px"}>
              {cursos.response.map(
                ({
                  idPublicacion,
                  tituloPublicacion,
                  descripcionPublicacion,
                }) => (
                  <Grid key={idPublicacion} item xs={12} sm={4}>
                    {/* Aquí puedes colocar la imagen y los detalles del curso */}
                    <Box
                      border="1px solid #ddd"
                      height={"220px"}
                      borderRadius="8px"
                      p={2}
                    >
                      <Typography variant="h6" gutterBottom>
                        {tituloPublicacion}
                      </Typography>
                      <Typography height={"80px"}>
                        {descripcionPublicacion.slice(0, 100)}...
                      </Typography>
                      <Button
                        sx={{ mt: "10px" }}
                        onClick={() => verCurso(idPublicacion)}
                        variant="contained"
                        color="primary"
                      >
                        Ver Curso
                      </Button>
                    </Box>
                  </Grid>
                )
              )}
            </Grid>
          </>
        )}

        {/* Sección de Testimonios */}
        <Box mt={5}>
          <Typography variant="h4" align="center" gutterBottom>
            Lo que dicen nuestros estudiantes
          </Typography>
          <Grid container spacing={3}>
            {/* Testimonio 1 */}
            <Grid item xs={12} sm={4}>
              {/* Puedes colocar la imagen del testimonio y el texto */}
              <Box textAlign="center">
                <Typography variant="h6" gutterBottom>
                  Estudiante 1
                </Typography>
                <Typography>
                  "Excelente plataforma, aprendí mucho y la recomendaré a mis
                  amigos."
                </Typography>
              </Box>
            </Grid>

            {/* Testimonio 2 */}
            <Grid item xs={12} sm={4}>
              {/* Puedes colocar la imagen del testimonio y el texto */}
              <Box textAlign="center">
                <Typography variant="h6" gutterBottom>
                  Estudiante 2
                </Typography>
                <Typography>
                  "Increíble variedad de cursos, encontré exactamente lo que
                  necesitaba."
                </Typography>
              </Box>
            </Grid>

            {/* Testimonio 3 */}
            <Grid item xs={12} sm={4}>
              {/* Puedes colocar la imagen del testimonio y el texto */}
              <Box textAlign="center">
                <Typography variant="h6" gutterBottom>
                  Estudiante 3
                </Typography>
                <Typography>
                  "Me encanta la facilidad de uso y la calidad de los
                  instructores."
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Contenido de "Acerca de Nosotros" */}
        <Box mt={3}>
          <Typography variant="h4" align="center" gutterBottom>
            Acerca de Nosotros
          </Typography>
          <Typography variant="h6" align="center" paragraph>
            Somos una plataforma dedicada a proporcionar educación en línea de
            alta calidad. Nuestra misión es facilitar el acceso a cursos
            impartidos por instructores expertos en diversos campos.
          </Typography>

          {/* Información Adicional */}
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h6" align="center" gutterBottom>
                Nuestra Historia
              </Typography>
              <Typography align="justify">
                Desde nuestro inicio, nos hemos comprometido a ofrecer a
                nuestros estudiantes una experiencia educativa enriquecedora.
                Con un enfoque en la calidad, diversidad y accesibilidad, hemos
                crecido para convertirnos en una plataforma líder en educación
                en línea.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h6" align="center" gutterBottom>
                Nuestro Equipo
              </Typography>
              <Typography align="justify">
                Contamos con un equipo de instructores y profesionales
                apasionados que están dedicados a brindar el mejor contenido
                educativo. Nos esforzamos por crear un entorno en el que los
                estudiantes puedan aprender y crecer.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Contenido de "Staff" */}

        <Box mt={3}>
          <Typography variant="h4" align="center" gutterBottom>
            Nuestro Staff
          </Typography>

          {/* Lista de Miembros del Staff */}
          <Grid container spacing={3}>
            {staffMembers.map((member, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box textAlign="center">
                  <Typography variant="h6" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    gutterBottom
                  >
                    {member.position}
                  </Typography>
                  <Typography>{member.bio}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default HomePage;
