import React from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  Button,
  Box,
} from "@mui/material";

const grayStyle = {
  color: "rgba(64, 64, 64, 0.8)",
};

const greenStyle = {
  color: "#141E34",
};

const SectionServicios = () => {
  return (
    <Grid container spacing={3}>
      {/* Columna izquierda con imagen centralizada */}
      <Grid item xs={12} sm={6}>
        {/*cambiar a box*/}
        <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
          {" "}
          <img
            src="imagen-central.jpg"
            alt="Imagen Central"
            style={{ width: "100%", height: "auto" }}
          />
        </Paper>
      </Grid>

      {/* Columna derecha con título, lista y botón */}
      <Grid item xs={12} sm={6}>
        {/*cambiar a box*/}
        <Paper elevation={3} style={{ padding: "20px" }}>
          <Typography
            style={greenStyle}
            variant="h3"
            fontWeight="bold"
            gutterBottom
          >
            Servicios
          </Typography>

          <List>
            <ListItem style={grayStyle}>1. FORMACIÓN PROFESIONAL</ListItem>
            <ListItem style={grayStyle}>
              2. CONSTRUYE TU PROPIA COMUNIDAD
            </ListItem>
            <ListItem style={grayStyle}>
              3. RUTAS DE APRENDIZAJE CON INTELÍGENCIA ARTIFICIAL
            </ListItem>
            <ListItem style={grayStyle}>
              4. PARTICIPA DE FORMA ACTIVA EN LOS DIFERENTES VÍDEOS
            </ListItem>
          </List>

          <Typography
            variant="h4"
            fontWeight="bold"
            style={greenStyle}
            gutterBottom
          >
            ¿QUÉ ESPERAS PARA UNIRTE?
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Button
              variant="contained"
              sx={{
                bgcolor: "#C5DD4A",
                color: "#141E34",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              Comenzar ahora
            </Button>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SectionServicios;
