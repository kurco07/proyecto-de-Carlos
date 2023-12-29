import {
  Alert,
  Box,
  Button,
  InputLabel,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { login } from "../services/usuarios";
import SnackBar from "./SnackBar";
import { editarCurso } from "../services/cursos";
import EditIcon from "@mui/icons-material/Edit";

const EditarCursoModal = ({ isOpen, closeModal, id }) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const date = new Date();
  const [currentUser, setCurrentUser] = useState({});
  const [snackBarError, setSnackBarError] = useState(false);

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
      const response = await editarCurso({
        idPublicacion: id,
        fechaPublicacion: newCourse.fecha,
        tituloPublicacion: newCourse.nombreCurso,
        descripcionPublicacion: newCourse.descripcionCurso,
        miniatura: newCourse.miniaturaCurso,
        cedulaCreador: currentUser.cedula,
        tipoPublicacion: "Video",
      });
      console.log(response);
      if (response.miniatura.length !== 1) {
        location.reload(true);
        return;
      }
      setSnackBarError(true);
    } catch (error) {
      console.log(error);
    }
  };

  const getData = (key, value) => setNewCourse({ ...newCourse, [key]: value });
  const onCloseSnackbar = () => setOpenSnackbar(false);
  const onCloseError = () => setSnackBarError(false);
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
          Herramienta de edicion de cursos <EditIcon />
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
            <Button color="secondary" type="submit" variant="contained">
              Editar
            </Button>
            <Button onClick={closeModal} variant="text">
              Cancelar
            </Button>
          </Box>
        </Box>
        <SnackBar open={openSnackbar} handleClose={onCloseSnackbar}>
          <Alert severity="success" sx={{ width: "100%" }}>
            Curso editado correctamente
          </Alert>
        </SnackBar>

        <SnackBar open={snackBarError} handleClose={onCloseError}>
          <Alert severity="error" sx={{ width: "100%" }}>
            Por favor agregar una miniatura en formato imagen
          </Alert>
        </SnackBar>
      </Box>
    </Modal>
  );
};

export default EditarCursoModal;
