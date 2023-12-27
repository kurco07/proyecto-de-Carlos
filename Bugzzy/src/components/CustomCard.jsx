import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

//no le hagan caso a esto, solo es para tener yo un ejemplo visual. att pedro liccioni

const CustomCard = ({ img, description }) => {
  return (
    <Card sx={{ width: "320px", height: "260px", borderRadius: ".7em" }}>
      <CardMedia component="img" height="140" image={img} alt="Imagen" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => alert("Ir al Curso")}
        >
          Ir al Curso
        </Button>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
