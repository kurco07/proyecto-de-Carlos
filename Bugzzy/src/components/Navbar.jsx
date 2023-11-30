// import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

// export function Navbar() {
//   return (
//     <AppBar position="fixed" sx={{ top: "0", width: "100%", zIndex: "1" }}>
//       <Toolbar>
//         <Typography sx={{ flexGrow: 1 }} variant="h6">
//           Bugzzy
//         </Typography>
//         <Box>
//           <Button
//             color="inherit"
//             variant="contained"
//             sx={{
//               bgcolor: "#C5DD4A",
//               borderRadius: "13%",
//               padding: "13px",
//               color: "black",
//             }}
//           >
//             Registrarse
//           </Button>
//           <Button color="inherit">Iniciar sesión</Button>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }

import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { Link as Routerlink } from "react-router-dom";

export function Navbar({ isLoggedIn }) {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  const handleSearchToggle = () => {
    setIsSearchExpanded(!isSearchExpanded);
  };

  const handleSearch = () => {
    // Lógica para manejar la búsqueda
    console.log("Realizar búsqueda...");
  };

  return (
    <AppBar position="fixed" sx={{ top: "0", width: "100%", zIndex: "1" }}>
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }} variant="h6">
          Bugzzy
        </Typography>
        <Box>
          {isLoggedIn ? (
            // Contenido cuando el usuario ha iniciado sesión
            <>
              <IconButton color="inherit" onClick={handleSearchToggle}>
                <SearchIcon />
              </IconButton>
              {isSearchExpanded && (
                <InputBase
                  placeholder="Buscar..."
                  sx={{ ml: 1, color: "inherit" }}
                  onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                />
              )}
              <Button color="inherit">Mi Perfil</Button>
              <Button color="inherit">Cerrar Sesión</Button>
            </>
          ) : (
            // Contenido cuando el usuario no ha iniciado sesión
            <>
              <Link variant="caption" to="/register" component={Routerlink}>
                <Button
                  color="inherit"
                  variant="contained"
                  sx={{
                    bgcolor: "#C5DD4A",
                    borderRadius: "13%",
                    padding: "13px",
                    color: "black",
                  }}
                >
                  Registrarse
                </Button>
              </Link>
              <Link variant="caption" to="/login" component={Routerlink}>
                <Button color="inherit">Iniciar Sesión</Button>
              </Link>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
