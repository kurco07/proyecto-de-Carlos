import {
  Button,
  TextField,
  Typography,
  Divider,
  Link,
  Box,
} from "@mui/material";
import { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Link as Routerlink } from "react-router-dom";

const Register = () => {

  const initialCredentials = {
    username: '',
    email: '',
    cedula: '',
    password: ''
  }

  const [credentials, setCredentials] = useState(initialCredentials)

  const getData = (key, value) => setCredentials({ ...credentials, [key]: value })

  const onSubmit = (e) => {
    e.preventDefault()

    console.log(credentials)
  }

  return (
    <form onSubmit={onSubmit} className="bg-login">
      <Grid
        container
        columnSpacing={0}
        xs={12}
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          container
          spacing={2}
          sx={{
            backgroundColor: "white",
            border: "1px solid gray",
            padding: "20px 20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minWidth: "350px",
            minHeight: "70%",
          }}
        >
          <Grid
            xs={12}
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <Box position={"absolute"} top={"15px"}>
              <img
                className="img-logo"
                src="./assets/amigos.jpeg"
                alt="bugzzy logo"
              />
            </Box>
            <Typography
              variant="h5"
              sx={{
                fontSize: "24px",
                position: "relative",
                top: "25px",
                color: "#2E3963",
                marginTop: "85px",
              }}
            >
              Registrarse
            </Typography>
          </Grid>

          <Grid>
            <Divider />
          </Grid>

          <Grid xs={12}>
            <TextField
              sx={{
                backgroundColor: "#D2EAFF",
                borderRadius: "15px",
              }}
              name="username"
              fullWidth
              label="Nombre de usuario"
              type="text"
              onChange={({ target }) => getData("username", target.value)}

              size="small"
            />
          </Grid>

          <Grid xs={12}>
            <TextField
              sx={{
                backgroundColor: "#D2EAFF",
                borderRadius: "15px",
              }}
              name="cedula"
              fullWidth
              label="Cedula"
              type="text"
              onChange={({ target }) => getData("cedula", target.value)}
              size="small"
            />
          </Grid>

          <Grid xs={12}>
            <TextField
              sx={{
                backgroundColor: "#D2EAFF",
                borderRadius: "15px",
              }}
              name="email"
              fullWidth
              label="Correo electrónico"
              type="email"
              onChange={({ target }) => getData("email", target.value)}
              size="small"
            />
          </Grid>

          <Grid xs={12}>
            <TextField
              sx={{
                backgroundColor: "#D2EAFF",
                borderRadius: "15px",
              }}
              name="password"
              fullWidth
              label="Contraseña"
              onChange={({ target }) => getData("password", target.value)}
              type="password"
              size="small"
            />
          </Grid>

          <Grid xs={12}>
            <TextField
              sx={{
                backgroundColor: "#D2EAFF",
                borderRadius: "15px",
              }}
              name="password"
              fullWidth
              label="Confirmar contraseña"
              type="password"
              size="small"
            />
          </Grid>

          <Grid xs={12} display="flex" justifyContent="center">
            <Button
              sx={{
                bgcolor: "#C5DD4A",
                color: "#2E3963",
                borderRadius: "15px",
                textTransform: "none",
                fontWeight: "bold",
              }}
              variant="contained"
              type="submit"

              fullWidth
            >
              Registrarse
            </Button>
          </Grid>

          <Grid xs={12} display="flex" justifyContent="center">
            <Link
              sx={{ color: "#2E3963", textDecoration: "none" }}
              variant="caption"
              to="/login"
              component={Routerlink}
            >
              ¿Ya posees cuenta? inicia sesión
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default Register;
