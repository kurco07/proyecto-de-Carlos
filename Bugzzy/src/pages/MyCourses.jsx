import React from "react";
import {
  AppBar,
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";
import { Navbar } from "../components/Navbar";

const MyCourses = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const isLoggedIn = true;

  return (
    <div>
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
      <Container sx={{ marginTop: "64px" }}>
        {/* Sección de Cursos Guardados */}
        <Box mt={3}>
          <Typography variant="h4" gutterBottom>
            Cursos Guardados
          </Typography>
          {/* Contenido de la sección de Cursos Guardados */}
          {/* Puedes agregar aquí la lógica para mostrar los cursos guardados */}
        </Box>

        {/* Sección de Seguir Viendo */}
        <Box mt={3}>
          <Typography variant="h4" gutterBottom>
            Seguir Viendo
          </Typography>
          {/* Contenido de la sección de Seguir Viendo */}
          {/* Puedes agregar aquí la lógica para mostrar los cursos en progreso */}
        </Box>

        {/* Sección de Cursos que Me Han Gustado */}
        <Box mt={3}>
          <Typography variant="h4" gutterBottom>
            Cursos que Me Han Gustado
          </Typography>
          {/* Contenido de la sección de Cursos que Me Han Gustado */}
          {/* Puedes agregar aquí la lógica para mostrar los cursos que le han gustado al usuario */}
        </Box>
      </Container>
    </div>
  );
};

export default MyCourses;
