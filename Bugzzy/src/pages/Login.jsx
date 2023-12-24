import {
  Button,
  TextField,
  Typography,
  Divider,
  Link,
  Box,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Link as Routerlink } from "react-router-dom";
import { login } from "../services/usuarios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export function Login() {
  const navigate = useNavigate()

  const initialCredentials = {
    cedula: '',
    password: ''
  }

  const [credentials, setCredentials] = useState(initialCredentials)

  const getData = (key, value) => setCredentials({ ...credentials, [key]: value })

  const onSubmit = async (e) => {
    e.preventDefault()


    try {
      const isUserExist = await login(credentials.cedula)

      if (isUserExist.cedula === credentials.cedula && isUserExist.clave === credentials.password) {
        console.log('Loged!')
        navigate('/homepage')
      }

    } catch (e) {
      console.log(e)
    }
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
              Iniciar Sesión
            </Typography>
          </Grid>

          <Grid>
            <Divider />
          </Grid>

          <Grid xs={12}>
            <TextField
              required
              variant="filled"
              name="cedula"
              fullWidth
              label="Cedula"
              type="text"
              size="small"
              onChange={({ target }) => getData("cedula", target.value)}
            />
          </Grid>

          <Grid xs={12}>
            <TextField
              required
              onChange={({ target }) => getData("password", target.value)}
              name="password"
              fullWidth
              variant="filled"
              label="Contraseña"
              type="password"
              size="small"
            />
          </Grid>

          <Grid xs={12} display="flex" justifyContent="center">
            <Link
              sx={{ color: "#2E3963", textDecoration: "none" }}
              variant="caption"
              to="/reset"
              component={Routerlink}
            >
              ¿Olvidó su contraseña?
            </Link>
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
              fullWidth
              type="submit"
            >
              Iniciar sesión
            </Button>
          </Grid>

          <Grid xs={12} display="flex" justifyContent="center">
            <Link variant="caption" to="/register" component={Routerlink}>
              <Button
                sx={{
                  textTransform: "none",
                  fontWeight: "bold",
                  color: "#15665A",
                }}
                variant="text"
                type="submit"
                fullWidth
              >
                Registrarse
              </Button>
            </Link>
          </Grid>

          <Grid>
            <Divider>o</Divider>
          </Grid>

          <Grid xs={12} display="flex" justifyContent="center">
            <Button
              sx={{
                backgroundColor: "#D35555",
                borderRadius: "15px",
                color: "white",
                textTransform: "none",
                fontWeight: "bold",
              }}
              variant="contained"
              type="submit"
              fullWidth
            >
              Iniciar sesión con Google +
            </Button>
          </Grid>

          <Grid xs={12} display="flex" justifyContent="center">
            <Button
              sx={{
                backgroundColor: "#445FC3",
                borderRadius: "15px",
                color: "white",
                textTransform: "none",
                fontWeight: "bold",
              }}
              variant="contained"
              type="submit"
              fullWidth
            >
              Iniciar sesión con Facebook
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );

}