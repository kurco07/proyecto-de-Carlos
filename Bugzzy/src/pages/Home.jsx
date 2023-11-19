import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <>
      <Button variant="contained">Home</Button>
      <Link to="login">Ir al login</Link>
    </>
  );
};
