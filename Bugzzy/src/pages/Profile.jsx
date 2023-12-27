import React, { useEffect, useState } from "react";
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
import CustomCard from "../components/CustomCard";
import { login, updateUser } from "../services/usuarios";

const isLoggedIn = true;

function Pages() {
  return (
    <div>
      <Page title="MI INFORMACIÓN">
        {/* Formulario para editar información del usuario */}
        <UserForm />
      </Page>

      <Page title="Cursos Recientes">
        {/* Contenido de la página "Proyectos Recientes" */}
        <CustomCard
          img="URL_DE_LA_IMAGEN" // Reemplaza con la URL real de la imagen
          description="Esta es la descripción de la tarjeta."
        />
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
      <Typography variant="h4" mb={2} color="#C5DD4A">
        {title}
      </Typography>
      {children}
    </div>
  );
}

function UserForm() {

  const [usuario, setUsuario] = useState({
    cedula: '',
    usuario: '',
    email: '',
    password: '',
  })

  useEffect(() => {

    const cargarData = async () => {
      const getUser = await login(localStorage.getItem('cedula'))
      setUsuario({
        cedula: getUser.cedula,
        usuario: getUser.usuario,
        email: getUser.correo_electronico,
        password: ''
      })
    }

    cargarData()


  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault();
    // lógica para enviar los datos del formulario al backend o realizar alguna acción específica.
    try {
      const response = await updateUser({
        "cedula": usuario.cedula,
        "correo_electronico": usuario.email,
        "usuario": usuario.usuario,
        "rol": "Estudiante",
        "clave": usuario.password
      })

      if (response.cedula === usuario.cedula) {
        location.reload(true)
      }

      console.log(response)

    } catch (e) {
      console.log(e)
    }
  };

  // Estilos personalizados para TextField
  const textFieldStyle = {
    color: "#FFFFFF",
    border: "1px solid #2d323a",
    borderRadius: "0.75rem",
    width: "800px",
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        required
        label="Nombre de Usuario"
        name="username"
        fullWidth
        variant="filled"
        type="text"
        size="small"
        value={usuario.usuario}
        onChange={(e) => setUsuario({ ...usuario, ['usuario']: e.target.value })}
        margin="normal"
        InputProps={{ style: textFieldStyle }} // Aplicar estilo al texto del input
        InputLabelProps={{ style: textFieldStyle }} // Aplicar estilo a la etiqueta del input
      />
      <TextField
        required
        label="Correo Electrónico"
        name="email"
        type="email"
        variant="filled"
        fullWidth
        value={usuario.email}
        onChange={(e) => setUsuario({ ...usuario, ['email']: e.target.value })}
        margin="normal"
        size="small"
        InputProps={{ style: textFieldStyle }} // Aplicar estilo al texto del input
        InputLabelProps={{ style: textFieldStyle }} // Aplicar estilo a la etiqueta del input
      />
      <TextField
        required
        variant="filled"
        name="password"
        label="Contraseña"
        fullWidth
        value={usuario.password}
        onChange={(e) => setUsuario({ ...usuario, ['password']: e.target.value })}
        margin="normal"
        type="password"
        size="small"
        InputProps={{ style: textFieldStyle }} // Aplicar estilo al texto del input
        InputLabelProps={{ style: textFieldStyle }} // Aplicar estilo a la etiqueta del input
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: "InfoText",
          color: "#ffffff",
          borderRadius: "0.75rem",
        }}
      >
        Editar Información
      </Button>
    </form>
  );
}

export function Profile() {
  const [userTags, setUserTags] = useState(["Mate1", "Tag2", "Tag3"]);
  const [currentUser, setCurrentUser] = useState('')
  useEffect(() => {

    const cargarData = async () => {
      const getUser = await login(localStorage.getItem('cedula'))
      setCurrentUser(getUser)
    }

    cargarData()


  }, [])

  const pageStyle = {
    display: "flex",
    flexDirection: "column", // Cambiado a columna para que la Navbar y los Aside estén apilados verticalmente
    height: "100vh",
  };

  const contentContainerStyle = {
    display: "flex",
    marginTop: "64px", // valor de marginTop según sea necesario
    minHeight: "100vh",
    backgroundColor: "#13161c", // Color de fondo del segundo aside //backgroundColor: "InfoText"
  };

  //estilos del aside izquierdo
  const aside1Style = {
    display: "flex",
    flexDirection: "column",
    width: "25vw",
    backgroundColor: "#13161c", // Color de fondo del primer aside
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
          <Typography variant="h5" mb={2} color="#C5DD4A">
            {currentUser.usuario}
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
