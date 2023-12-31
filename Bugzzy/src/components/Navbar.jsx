import { useState } from "react";
import PropTypes from "prop-types"; // Se importó 'PropTypes'
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ContextoLogin } from "../useContext/LoginContext";
export function Navbar({ isLoggedIn }) {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const { Loged, setLoged } = useContext(ContextoLogin);

  const logOut = () => {
    setLoged(!Loged);
    localStorage.removeItem("Loged");
    navigate("/login");
  };

  const handleSearchToggle = () => {
    setIsSearchExpanded(!isSearchExpanded);
  };

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const handleSearch = () => {
    console.log("Realizar búsqueda...");
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          top: "0",
          width: "100%",
          zIndex: "9999999",
          backgroundColor: "#13161c",
          color: "#C5DD4A",
          borderBottom: "1px solid #2d323a",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box display={"flex"} gap={"5px"}>
            <IconButton
              sx={{
                display: {
                  xs: "block",
                  sm: "block",
                  md: "none",
                },
              }}
              color="inherit"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Button
              onClick={() => navigate("/homepage")}
              sx={{ fontWeight: "bold", maxWidth: "100px" }}
              variant="h6"
            >
              <img
                style={{ marginRight: "10px" }}
                width={40}
                height={40}
                src="assets/logo.svg"
              ></img>
              Bugzzy
            </Button>
          </Box>

          <Box>
            {isLoggedIn ? (
              <>
                <Button
                  onClick={() => navigate("/courses")}
                  color="inherit"
                  sx={{ fontWeight: "700" }}
                >
                  Cursos
                </Button>
                <Button
                  onClick={() => navigate("/profile")}
                  color="inherit"
                  sx={{ fontWeight: "700" }}
                >
                  Mi Perfil
                </Button>
                <Button
                  onClick={() => logOut()}
                  color="inherit"
                  sx={{ fontWeight: "700" }}
                >
                  Cerrar Sesión
                </Button>
              </>
            ) : (
              <>
                <Button
                  sx={{
                    bgcolor: "#C5DD4A",
                    color: "#141E34",
                    padding: "10px",
                    borderRadius: "10px",
                    fontWeight: "bold",
                  }}
                  component={RouterLink}
                  to="/register"
                >
                  Registrarse
                </Button>
                <Button
                  sx={{ fontWeight: "bold" }}
                  color="inherit"
                  component={RouterLink}
                  to="/login"
                >
                  Iniciar Sesión
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>

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
            to="/ReproductorMP4"
          >
            Reproductor
          </ListItem>
          {isLoggedIn && (
            <ListItem
              button
              onClick={handleDrawerClose}
              component={RouterLink}
              to="/MyCourses"
            >
              Mis Cursos
            </ListItem>
          )}
          <ListItem
            button
            onClick={handleDrawerClose}
            component={RouterLink}
            to="/ImportVideo"
          >
            Importar Video
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

// Se agregó la validación de PropTypes para isLoggedIn
Navbar.propTypes = {
  isLoggedIn: PropTypes.bool,
};
