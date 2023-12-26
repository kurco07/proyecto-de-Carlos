import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Divider,
  Link,
  Box,
  Avatar,
  List,
  ListItem,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Link as Routerlink } from "react-router-dom";
import { Navbar } from "../components/Navbar";

const isLoggedIn = true;

function Pages() {
  return (
    <div>
      <Page title="About Me">
        {/* Formulario para editar información del usuario */}
        <UserForm />
      </Page>

      <Page title="Proyectos Recientes">
        {/* Contenido de la página "Proyectos Recientes" */}
        <Typography>Contenido de proyectos recientes.</Typography>
      </Page>
    </div>
  );
}

function Page({ title, children }) {
  const pageStyle = {
    marginBottom: "20px",
  };

  return (
    <div style={pageStyle}>
      <Typography variant="h4" mb={2}>
        {title}
      </Typography>
      {children}
    </div>
  );
}

function UserForm() {
  const [username, setUsername] = useState("Nombre de Usuario");
  const [email, setEmail] = useState("correo@example.com");
  const [password, setPassword] = useState("********");

  const handleSubmit = (e) => {
    e.preventDefault();
    // lógica para enviar los datos del formulario al backend o realizar alguna acción específica.
    console.log("Datos del formulario enviados:", {
      username,
      email,
      password,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Nombre de Usuario"
        fullWidth
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Correo Electrónico"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Contraseña"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
        type="password"
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ backgroundColor: "#141E34" }}
      >
        Editar Información
      </Button>
    </form>
  );
}

export function Profile() {
  const [userName, setUserName] = useState("Nombre de Usuario");
  const [userTags, setUserTags] = useState(["Mate1", "Tag2", "Tag3"]);

  const pageStyle = {
    display: "flex",
    flexDirection: "column", // Cambiado a columna para que la Navbar y los Aside estén apilados verticalmente
    height: "100vh",
  };

  const contentContainerStyle = {
    display: "flex",
    marginTop: "64px", // valor de marginTop según sea necesario
    minHeight: "100vh",
  };

  //estilos del aside izquierdo
  const aside1Style = {
    display: "flex",
    flexDirection: "column",
    width: "25vw",
    backgroundColor: "#141E34", // Color de fondo del primer aside
    padding: "20px",
    textAlign: "center",
    alignItems: "center",
    color: "#ffffff",
  };

  //estilos del aside derecho
  const aside2Style = {
    flex: 1,
    padding: "20px",
  };

  //estilos de la imagen del aside
  const userImageStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "10px",
  };

  const tagsListStyle = {
    listStyleType: "none",
    paddingBot: 0,
    fontWeight: "bold",
  };

  const tagListItemStyle = {
    margin: "16px 0", // Agrega un margen arriba y abajo de cada elemento de la lista
  };

  return (
    <div style={pageStyle}>
      <Navbar isLoggedIn={isLoggedIn} />
      <div style={contentContainerStyle}>
        <div style={aside1Style}>
          {/* Contenido del primer aside */}
          {/* Imagen del usuario */}
          <Avatar
            alt="User Avatar"
            src="./assets/amigos.jpeg"
            sx={userImageStyle}
          />

          {/* Nombre del Usuario */}
          <Typography variant="h5" mb={2}>
            {userName}
          </Typography>

          {/* Divider */}
          <Divider mb={2} />

          {/* Lista de Tags */}
          <ul style={tagsListStyle}>
            {userTags.map((tag, index) => (
              <li key={index} style={tagListItemStyle}>
                <Link
                  href={`#${tag}`}
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  {tag}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div style={aside2Style}>
          {/* Contenido del segundo aside */}
          <Pages />
        </div>
      </div>
    </div>
  );
}

export default Profile;
