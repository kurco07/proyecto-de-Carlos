import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

const Section = () => {
  return (
    <Grid container spacing={3}>
      {/* Columna 1 */}
      <Grid item xs={12} sm={4}>
        <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
          <img
            src="imagen1.jpg"
            alt="Imagen 1"
            style={{ width: "100%", height: "auto" }}
          />
          <Typography variant="h6" gutterBottom>
            EDUCATIVO
          </Typography>
          <Typography variant="subtitle1">
            Descripción de la imagen 1.
          </Typography>
        </Paper>
      </Grid>

      {/* Columna 2 */}
      <Grid item xs={12} sm={4}>
        <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
          <img
            src="imagen2.jpg"
            alt="Imagen 2"
            style={{ width: "100%", height: "auto" }}
          />
          <Typography variant="h6" gutterBottom>
            INTUITIVO
          </Typography>
          <Typography variant="subtitle1">
            Descripción de la imagen 2.
          </Typography>
        </Paper>
      </Grid>

      {/* Columna 3 */}
      <Grid item xs={12} sm={4}>
        <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
          <img
            src="imagen3.jpg"
            alt="Imagen 3"
            style={{ width: "100%", height: "auto" }}
          />
          <Typography variant="h6" gutterBottom>
            ACCESIBLE
          </Typography>
          <Typography variant="subtitle1">
            Descripción de la imagen 3.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Section;
