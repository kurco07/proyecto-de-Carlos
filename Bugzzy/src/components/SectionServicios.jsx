import React from "react";
import { Grid, Paper, Typography, List, ListItem, Button } from "@mui/material";

const SectionServicios = () => {
  return (
    <Grid container spacing={3}>
      {/* Columna izquierda con imagen centralizada */}
      <Grid item xs={12} sm={6}>
        <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
          <img
            src="imagen-central.jpg"
            alt="Imagen Central"
            style={{ width: "100%", height: "auto" }}
          />
        </Paper>
      </Grid>

      {/* Columna derecha con título, lista y botón */}
      <Grid item xs={12} sm={6}>
        <Paper elevation={3} style={{ padding: "20px" }}>
          <Typography variant="h4" gutterBottom>
            Servicios
          </Typography>

          <List>
            <ListItem>1. Servicio 1</ListItem>
            <ListItem>2. Servicio 2</ListItem>
            <ListItem>3. Servicio 3</ListItem>
            <ListItem>4. Servicio 4</ListItem>
            <ListItem>5. Servicio 5</ListItem>
          </List>

          <Typography variant="h5" gutterBottom>
            ¿Qué esperas para unirte?
          </Typography>

          <Button variant="contained" color="primary">
            Comenzar ahora
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SectionServicios;
