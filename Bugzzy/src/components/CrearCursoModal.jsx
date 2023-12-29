import {
  Box,
  Button,
  Input,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { crearCurso } from "../services/cursos";
import { useEffect, useState } from "react";
import { login } from "../services/usuarios";
import ImportVideo from "../pages/ImportVideo";

const CrearCursoModal = ({ isOpen, closeModal }) => {
  const date = new Date();
  const [currentUser, setCurrentUser] = useState({});
  const initialState = {
    nombreCurso: "",
    descripcionCurso: "",
    miniaturaCurso: "",
    fecha: date.toISOString(),
  };

  const [newCourse, setNewCourse] = useState(initialState);
  useEffect(() => {
    const cargarUsuario = async () => {
      const getUser = await login(localStorage.getItem("cedula"));
      setCurrentUser(getUser);
    };
    cargarUsuario();
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await crearCurso({
        fechaPublicacion: newCourse.fecha,
        tituloPublicacion: newCourse.nombreCurso,
        descripcionPublicacion: newCourse.descripcionCurso,
        miniatura: newCourse.miniaturaCurso,
        cedulaCreador: currentUser.cedula,
        tipoPublicacion: "Video",
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getData = (key, value) => setNewCourse({ ...newCourse, [key]: value });

  return (
    <Modal
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClose={closeModal}
      open={isOpen}
    >
      <Box
        padding={"20px"}
        bgcolor={"white"}
        borderRadius={"0.75rem"}
        width={"670px"}
        height={"550px"}
        overflow={"auto"}
      >
        <Typography fontSize={"20px"} mb={"10px"}>
          Herramienta de creacion de cursos
        </Typography>
        <InputLabel
          sx={{
            mb: "10px",
          }}
        >
          Ingrese la informacion del curso
        </InputLabel>

        <Box
          component={"form"}
          gap={"10px"}
          display={"flex"}
          flexDirection={"column"}
          onSubmit={onSubmit}
          encType="multipart/form-data"
        >
          <TextField
            onChange={({ target }) => getData("nombreCurso", target.value)}
            required
            helperText="El nombre esta compuesto de letras de A-Za-z"
            size="small"
            label="Nombre de curso"
            value={newCourse.nombreCurso}
            variant="filled"
            fullWidth
            placeholder="Ingrese nombre de curso"
          />
          <TextField
            required
            onChange={({ target }) => getData("descripcionCurso", target.value)}
            helperText="La descripcion esta compuesto de letras de A-Za-z, simbolos y emojis"
            size="small"
            multiline
            value={newCourse.descripcionCurso}
            maxRows={5}
            label="Descripcion de curso"
            variant="filled"
            fullWidth
            placeholder="Ingrese la descripcion del curso"
          />

          <InputLabel label="input-file">Nombre del profesor</InputLabel>

          <TextField
            required
            helperText="El nombre del autor es el usuario que suba el curso"
            size="small"
            disabled
            value={currentUser.usuario}
            variant="standard"
            fullWidth
            placeholder="Ingrese nombre de curso"
          />

          <InputLabel label="input-file">Miniatura del curso</InputLabel>
          {/* <Input
            onChange={({ target }) =>
              getData("miniaturaCurso", target.files[0])
            }
            required
            type="file"
          /> */}
          <input
            type="file"
            onChange={({ target }) =>
              getData("miniaturaCurso", target.files[0])
            }
          />
          <Box mt={"30px"} display={"flex"} gap={"10px"}>
            <Button type="submit" variant="contained">
              Publicar
            </Button>
            <Button variant="text">Cancelar</Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default CrearCursoModal;
