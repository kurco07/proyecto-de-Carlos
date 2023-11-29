import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom"; // Asegúrate de tener React Router instalado
import { Navbar } from "../components/Navbar";

const isLoggedIn = true;

const HomePage = () => {
  return (
    <div>
      {/* Barra de Navegación */}
      <Navbar isLoggedIn={isLoggedIn} />

      {/* Contenido Principal */}
      <Container sx={{ marginTop: "100px" }}>
        <Box mt={3}>
          {/* Imagen centrada */}
          <Box position="relative" height="100vh" overflow="hidden">
            <img
              src="./assets/pregrado.jpg"
              alt="Imagen Bienvenida"
              style={{ width: "100%", height: "auto" }}
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
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              textAlign="center"
              color="white"
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
        <Grid container spacing={3}>
          {/* Curso Destacado 1 */}
          <Grid item xs={12} sm={4}>
            {/* Aquí puedes colocar la imagen y los detalles del curso */}
            <Box border="1px solid #ddd" borderRadius="8px" p={2}>
              <Typography variant="h6" gutterBottom>
                Curso Destacado 1
              </Typography>
              <Typography>
                Descripción del curso destacado. Puedes agregar más detalles
                aquí.
              </Typography>
              <Button variant="contained" color="primary">
                Ver Curso
              </Button>
            </Box>
          </Grid>

          {/* Curso Destacado 2 */}
          <Grid item xs={12} sm={4}>
            {/* Aquí puedes colocar la imagen y los detalles del curso */}
            <Box border="1px solid #ddd" borderRadius="8px" p={2}>
              <Typography variant="h6" gutterBottom>
                Curso Destacado 2
              </Typography>
              <Typography>
                Descripción del curso destacado. Puedes agregar más detalles
                aquí.
              </Typography>
              <Button variant="contained" color="primary">
                Ver Curso
              </Button>
            </Box>
          </Grid>

          {/* Curso Destacado 3 */}
          <Grid item xs={12} sm={4}>
            {/* Aquí puedes colocar la imagen y los detalles del curso */}
            <Box border="1px solid #ddd" borderRadius="8px" p={2}>
              <Typography variant="h6" gutterBottom>
                Curso Destacado 3
              </Typography>
              <Typography>
                Descripción del curso destacado. Puedes agregar más detalles
                aquí.
              </Typography>
              <Button variant="contained" color="primary">
                Ver Curso
              </Button>
            </Box>
          </Grid>
        </Grid>

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
      </Container>
    </div>
  );
};

export default HomePage;
