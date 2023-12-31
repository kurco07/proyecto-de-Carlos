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
import { Navigate, Link as Routerlink } from "react-router-dom";
import { register } from "../services/usuarios";
import { useNavigate } from "react-router-dom";
const RegisterProfesores = () => {
  const navigate = useNavigate();

  const initialCredentials = {
    username: "",
    email: "",
    cedula: "",
    password: "",
    confirmPassword: "",
  };

  const [credentials, setCredentials] = useState(initialCredentials);

  const getData = (key, value) =>
    setCredentials({ ...credentials, [key]: value });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (credentials.confirmPassword === credentials.password) {
      try {
        const newUser = await register({
          cedula: credentials.cedula,
          correo_electronico: credentials.email,
          rol: "Profesor ",
          usuario: credentials.username,
          clave: credentials.password,
        });

        if (newUser.correo_electronico) {
          setTimeout(() => {
            navigate("/login");
            console.log(newUser);
          }, 3000);
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log("Clave mala  uwu");
    }
  };

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
            backgroundColor: "#13161c",
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
            <Box position={"absolute"} top={"0px"}>
              <img
                className="img-logo"
                src="./assets/logo.svg"
                alt="bugzzy logo"
              />
            </Box>

            <Typography
              variant="h5"
              sx={{
                fontSize: "24px",
                position: "relative",
                top: "25px",
                color: "#C5DD4A",
                marginTop: "60px",
              }}
            >
              Registrarse (Profesores)
            </Typography>
          </Grid>

          <Grid>
            <Divider />
          </Grid>

          <Grid xs={12}>
            <TextField
              name="username"
              fullWidth
              label="Nombre de usuario"
              required
              type="text"
              onChange={({ target }) => getData("username", target.value)}
              inputProps={{
                style: {
                  color: "white",
                },
              }}
              sx={{
                "& .MuiInputLabel-root": { color: "white" }, //styles the label
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
                "& label.Mui-focused": {
                  color: "white",
                },
                "& .MuiOutlinedInput-root:hover": {
                  "& > fieldset": { borderColor: "white" },
                },
                marginTop: "10px",
                width: "100%",
              }}
              size="small"
            />
          </Grid>

          <Grid xs={12}>
            <TextField
              inputProps={{
                style: {
                  color: "white",
                },
              }}
              name="cedula"
              fullWidth
              required
              label="Cedula"
              type="text"
              onChange={({ target }) => getData("cedula", target.value)}
              size="small"
              sx={{
                "& .MuiInputLabel-root": { color: "white" }, //styles the label
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
                "& label.Mui-focused": {
                  color: "white",
                },
                "& .MuiOutlinedInput-root:hover": {
                  "& > fieldset": { borderColor: "white" },
                },
                marginTop: "10px",
              }}
            />
          </Grid>

          <Grid xs={12}>
            <TextField
              inputProps={{
                style: {
                  color: "white",
                },
              }}
              sx={{
                "& .MuiInputLabel-root": { color: "white" }, //styles the label
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
                "& label.Mui-focused": {
                  color: "white",
                },
                "& .MuiOutlinedInput-root:hover": {
                  "& > fieldset": { borderColor: "white" },
                },
                marginTop: "10px",
              }}
              name="email"
              required
              fullWidth
              label="Correo electrónico"
              type="email"
              onChange={({ target }) => getData("email", target.value)}
              size="small"
            />
          </Grid>

          <Grid xs={12}>
            <TextField
              inputProps={{
                style: {
                  color: "white",
                },
              }}
              sx={{
                "& .MuiInputLabel-root": { color: "white" }, //styles the label
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
                "& label.Mui-focused": {
                  color: "white",
                },
                "& .MuiOutlinedInput-root:hover": {
                  "& > fieldset": { borderColor: "white" },
                },
                marginTop: "10px",
              }}
              name="password"
              fullWidth
              required
              label="Contraseña"
              onChange={({ target }) => getData("password", target.value)}
              type="password"
              size="small"
            />
          </Grid>

          <Grid xs={12}>
            <TextField
              inputProps={{
                style: {
                  color: "white",
                },
              }}
              sx={{
                "& .MuiInputLabel-root": { color: "white" }, //styles the label
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
                "& label.Mui-focused": {
                  color: "white",
                },
                "& .MuiOutlinedInput-root:hover": {
                  "& > fieldset": { borderColor: "white" },
                },
                marginTop: "10px",
              }}
              name="password"
              onChange={({ target }) =>
                getData("confirmPassword", target.value)
              }
              fullWidth
              required
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
                borderRadius: "0.20rem",
                textTransform: "none",
                fontWeight: "bold",

                "&:hover": {
                  bgcolor: "#C5DD4A",
                  scale: "1.02",
                },
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
              sx={{ color: "white", textDecoration: "none" }}
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

export default RegisterProfesores;
