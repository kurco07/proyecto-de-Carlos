import {
  Alert,
  Box,
  Button,
  InputLabel,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import { agregarVideos } from "../services/cursos";
import { useEffect, useState } from "react";
import { login } from "../services/usuarios";
import SnackBar from "./SnackBar";

const AgregarVideosModal = ({ isOpen, closeModal, id }) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [snackBarError, setSnackBarError] = useState(false);
  const initialState = {
    nombreCurso: "",
    descripcionCurso: "",
    miniaturaCurso: "",
    videoCurso: "",
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
      const response = await agregarVideos({
        tituloCapitulo: newCourse.nombreCurso,
        descripcionCapitulo: newCourse.descripcionCurso,
        miniatura: newCourse.miniaturaCurso,
        idPublicacion: id,
        video_url: newCourse.videoCurso,
      });
      setNewCourse(initialState);
      setOpenSnackbar(true);
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
        height={"480px"}
        overflow={"auto"}
      >
        <Typography fontSize={"20px"} mb={"10px"}>
          Herramienta para agregar videos al curso <UploadIcon />
        </Typography>
        <InputLabel
          sx={{
            mb: "10px",
          }}
        >
          Ingrese la informacion del video
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
            helperText="El titulo del video esta compuesto de letras de A-Za-z"
            size="small"
            label="Titulo del video"
            value={newCourse.nombreCurso}
            variant="filled"
            fullWidth
            placeholder="Ingrese el titulo del video"
          />
          <TextField
            required
            onChange={({ target }) => getData("descripcionCurso", target.value)}
            helperText="La descripcion del titulo del video esta compuesto de letras de A-Za-z, simbolos y emojis"
            size="small"
            multiline
            value={newCourse.descripcionCurso}
            maxRows={5}
            label="Descripcion de curso"
            variant="filled"
            fullWidth
            placeholder="Ingrese la descripcion del titulo del video"
          />

          <InputLabel label="input-file">Miniatura del video</InputLabel>

          <input
            required
            type="file"
            onChange={({ target }) =>
              getData("miniaturaCurso", target.files[0])
            }
          />

          <InputLabel label="input-file">Video del curso</InputLabel>

          <input
            required
            type="file"
            onChange={({ target }) => getData("videoCurso", target.files[0])}
          />

          <Box mt={"10px"} display={"flex"} gap={"10px"}>
            <Button type="submit" variant="contained">
              Publicar
            </Button>
            <Button onClick={closeModal} variant="text">
              Cancelar
            </Button>
          </Box>
        </Box>
        <SnackBar open={openSnackbar} handleClose={onCloseSnackbar}>
          <Alert severity="success" sx={{ width: "100%" }}>
            Video agregado correctamente
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

export default AgregarVideosModal;
