import { Alert, Box, Button, Divider, Modal, Typography } from "@mui/material";
import { Navbar } from "../components/Navbar";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import CommentIcon from "@mui/icons-material/Comment";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  capitloCursos,
  comentariosCursos,
  eliminarCurso,
  obtenerCursos,
} from "../services/cursos";
import { login } from "../services/usuarios";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import CrearCursoModal from "../components/CrearCursoModal";
import AddIcon from "@mui/icons-material/Add";
import EditarCursoModal from "../components/EditarCursoModal";
import AgregarVideosModal from "../components/AgregarVideosModal";
const DashboardProfesor = () => {
  const [cursos, setCursos] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [idToDelete, setIdToDelete] = useState();
  const navigate = useNavigate();
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [courseToEdit, setCourseToEdit] = useState({});
  const [agregarVideosModal, setAgregarVideosModal] = useState(false);
  useEffect(() => {
    const cargarCursos = async () => {
      const response = await obtenerCursos();
      const playlist = await capitloCursos();
      const comentarios = await comentariosCursos();

      const getUser = await login(localStorage.getItem("cedula"));

      // Obtener los cursos del profesor actual
      const filterResponse = response.filter(
        ({ cedulaCreador }) => cedulaCreador === localStorage.getItem("cedula")
      );
      // Obtener los videos del profesor actual
      const filterPlayList = playlist.filter(({ idPublicacion }) =>
        filterResponse.some((curso) => curso.idPublicacion === idPublicacion)
      );
      // Obtener los comentarios del profesor actual
      const filterComentarios = comentarios.filter(
        ({ idCapituloPublicacion }) =>
          playlist.some(
            (video) => video.idVideoPublicacion === idCapituloPublicacion
          )
      );

      setCursos({
        playlist,
        response,
        filterResponse,
        filterPlayList,
        comentarios,
        filterComentarios,
      });
      setCurrentUser(getUser);
    };

    cargarCursos();
  }, []);
  console.log(cursos);

  if (currentUser.rol === "Estudiante") navigate("/login");
  console.log(currentUser);
  const onClose = () => setIsOpen(false);
  const closeModalEditar = () => setModalEditar(false);
  const onCloseDelete = () => setConfirmDelete(false);
  const onCloseAgregarVideos = () => setAgregarVideosModal(false);
  const onSubmit = async () => {
    try {
      const response = await eliminarCurso(idToDelete);
      console.log(response);

      if (response) location.reload(true);
    } catch (error) {
      console.log(error);
    }
  };
  const verCurso = (curso) => {
    navigate(`/reproductorMP4/${curso}/`);
  };
  return (
    <Box
      bgcolor={"#13161c"}
      height={"auto"}
      width={"100vw"}
      display={"flex"}
      alignItems={"initial"}
      justifyContent={"center"}
      paddingBottom={"40px"}
      minHeight={"1100px"}
    >
      <Navbar isLoggedIn={true} />

      <Box
        mt={"100px"}
        display={"flex"}
        flexDirection={"column"}
        width={"670px"}
      >
        <Typography mb={"10px"} variant="h6" textAlign={"left"} color={"white"}>
          Estadisticas
        </Typography>
        <Box
          alignItems={"center"}
          justifyContent={"center"}
          gap={"10px"}
          display={"flex"}
          flexDirection={"row"}
        >
          <Box
            padding={"10px"}
            borderRadius={"0.75rem"}
            height={"150px"}
            width={"32%"}
            sx={{
              background: "linear-gradient(45deg, #C5DD4A, #FFC04D)",
              boxShadow: "0px 4px 10px #E3B673",
            }}
          >
            <Box
              display={"flex"}
              height={"100%"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              {cursos.filterPlayList && (
                <Box display={"flex"} alignItems={"center"} gap={"30px"}>
                  <Typography
                    height={"70px"}
                    color={"#1e2229"}
                    fontSize={"55px"}
                    fontWeight={700}
                  >
                    {cursos.filterPlayList.length < 10
                      ? "0" + cursos.filterPlayList.length
                      : cursos.filterPlayList.length}
                  </Typography>
                  <VideoCallIcon
                    sx={{
                      mt: "15px",
                      fontSize: "55px",
                    }}
                    color="disabled"
                  />
                </Box>
              )}
              <Divider />
              <Typography mt={"5px"} color={"#1e2229"} fontSize={"11px"}>
                Capitulos publicados
              </Typography>
            </Box>
          </Box>
          <Box
            padding={"10px"}
            borderRadius={"0.75rem"}
            height={"150px"}
            width={"32%"}
            sx={{
              background:
                "linear-gradient(45deg, rgb(222, 90, 17), rgb(255, 194, 38))",
              boxShadow: "0px 4px 10px #B46C37",
            }}
          >
            <Box
              display={"flex"}
              height={"100%"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              {cursos.filterResponse && (
                <Box display={"flex"} alignItems={"center"} gap={"30px"}>
                  <Typography
                    height={"70px"}
                    color={"#1e2229"}
                    fontSize={"55px"}
                    fontWeight={700}
                  >
                    {cursos.filterResponse.length < 10
                      ? "0" + cursos.filterResponse.length
                      : cursos.filterResponse.length}
                  </Typography>
                  <FolderCopyIcon
                    sx={{
                      mt: "15px",
                      fontSize: "55px",
                    }}
                    color="disabled"
                  />
                </Box>
              )}
              <Divider />
              <Typography mt={"5px"} color={"#1e2229"} fontSize={"11px"}>
                Cursos publicados
              </Typography>
            </Box>
          </Box>
          <Box
            padding={"10px"}
            borderRadius={"0.75rem"}
            height={"150px"}
            width={"32%"}
            sx={{
              background: "linear-gradient(45deg, #C5DD4A, #7EE87F)",
              boxShadow: "0px 4px 10px #82A763 ",
            }}
          >
            <Box
              display={"flex"}
              height={"100%"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              {cursos.filterComentarios && (
                <Box display={"flex"} alignItems={"center"} gap={"30px"}>
                  <Typography
                    height={"70px"}
                    color={"#1e2229"}
                    fontSize={"55px"}
                    fontWeight={700}
                  >
                    {cursos.filterComentarios.length < 10
                      ? "0" + cursos.filterComentarios.length
                      : cursos.filterComentarios.length}
                  </Typography>
                  <CommentIcon
                    sx={{
                      mt: "15px",
                      fontSize: "55px",
                    }}
                    color="disabled"
                  />
                </Box>
              )}
              <Divider />
              <Typography mt={"5px"} color={"#1e2229"} fontSize={"11px"}>
                Comentarios recibidos
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box width={"100%"} mt={"30px"}>
          <Typography variant="h6" textAlign={"left"} color={"white"}>
            Comienza a compartir
          </Typography>
          {/* Boton de agregar curso */}
          <Box
            component={"button"}
            onClick={() => setIsOpen(true)}
            mt={"10px"}
            padding={"10px"}
            borderRadius={"0.75rem"}
            height={"60px"}
            width={"100%"}
            sx={{
              background: "linear-gradient(45deg, #a85ee6, #ffacf2)",
              boxShadow: "0px 4px 10px #5c2d83 ",
              transition: "all .5s",

              "&:hover": {
                transform: "scale(1.02)",
                boxShadow: "0px 8px 14px #5c2d83",
                cursor: "pointer",
                transition: "all .5s",
              },
            }}
          >
            <Box
              display={"flex"}
              height={"100%"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography fontWeight={700}>Agregar cursos</Typography>
              <ArrowForwardIosIcon />
            </Box>
          </Box>
        </Box>
        <Box width={"100%"} mt={"30px"}>
          <Typography variant="h6" textAlign={"left"} color={"white"}>
            Mis cursos
          </Typography>

          <Box
            width={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            {/* Secciones de Cursos Destacados */}
            {cursos.response && (
              <>
                <Box
                  width={"670px"}
                  mt={"20px"}
                  display={"flex"}
                  flexDirection={"column"}
                  gap={"10px"}
                >
                  {cursos.filterResponse.map(
                    ({
                      idPublicacion,
                      tituloPublicacion,
                      descripcionPublicacion,
                    }) => (
                      <Box
                        sx={{
                          transition: "all .5s",
                          "&:hover": {
                            transform: "scale(1.009)",
                            boxShadow: "0px 5px 10px #ffffff50",
                            cursor: "pointer",
                            transition: "all .5s",
                          },
                        }}
                        height={"260px"}
                        key={idPublicacion}
                        border={"1px solid #2d323a"}
                        borderRadius={"0.75rem"}
                        display={"flex"}
                        flexDirection={"row-reverse"}
                      >
                        {/* Aquí puedes colocar la imagen y los detalles del curso */}

                        <Box
                          display={"flex"}
                          flexDirection={"column"}
                          justifyContent={"center"}
                          color={"white"}
                          width={"100%"}
                          padding={"20px"}
                          gap={"10px"}
                          zIndex={"999"}
                        >
                          <SlowMotionVideoIcon color="info" />
                          <Typography color={"#C5DD4A"} variant="subtitle1">
                            {tituloPublicacion}
                          </Typography>
                          <Typography fontSize={"10px"} color={"#ffffff70"}>
                            12 Clases | Certificado de finalizacion
                          </Typography>
                          <Typography fontSize={"13px"} color={"#c4c8ce"}>
                            {descripcionPublicacion.slice(0, 300)}...
                          </Typography>

                          <Box gap={"10px"} display={"flex"}>
                            <Button
                              sx={{
                                bgcolor: "white",
                                color: "black",
                                width: "130px",
                                "&:hover": {
                                  bgcolor: "#ffffff",

                                  scale: "1.02",
                                },
                              }}
                              onClick={() => verCurso(idPublicacion)}
                              size="small"
                              variant="contained"
                              endIcon={<ArrowForwardIcon fontSize="small" />}
                            >
                              Ir al curso
                            </Button>
                            <Button
                              sx={{
                                bgcolor: "white",
                                color: "black",
                                width: "130px",
                                "&:hover": {
                                  bgcolor: "#ffffff",

                                  scale: "1.02",
                                },
                              }}
                              onClick={() => {
                                setCourseToEdit(idPublicacion);
                                setModalEditar(true);
                              }}
                              size="small"
                              variant="contained"
                              endIcon={<EditIcon fontSize="small" />}
                            >
                              Editar
                            </Button>

                            <Button
                              sx={{
                                bgcolor: "white",
                                color: "black",
                                width: "190px",
                                "&:hover": {
                                  bgcolor: "#ffffff",

                                  scale: "1.02",
                                },
                              }}
                              onClick={() => {
                                setCourseToEdit(idPublicacion);
                                setAgregarVideosModal(true);
                              }}
                              size="small"
                              variant="contained"
                              endIcon={<AddIcon fontSize="small" />}
                            >
                              Agregar videos
                            </Button>

                            <Button
                              sx={{
                                bgcolor: "white",
                                color: "black",
                                width: "130px",
                                "&:hover": {
                                  bgcolor: "#ffffff",

                                  scale: "1.02",
                                },
                              }}
                              onClick={() => {
                                setConfirmDelete(true);
                                setIdToDelete(idPublicacion);
                              }}
                              size="small"
                              variant="contained"
                              endIcon={<ClearIcon fontSize="small" />}
                            >
                              Elimnar
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                    )
                  )}
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Box>
      <CrearCursoModal
        isOpen={isOpen}
        currentUser={currentUser}
        closeModal={onClose}
      />
      <EditarCursoModal
        id={courseToEdit}
        closeModal={closeModalEditar}
        isOpen={modalEditar}
      />

      <AgregarVideosModal
        closeModal={onCloseAgregarVideos}
        isOpen={agregarVideosModal}
        id={courseToEdit}
      />
      <Modal
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClose={onCloseDelete}
        open={confirmDelete}
      >
        <Box
          padding={"20px"}
          bgcolor={"white"}
          borderRadius={"0.75rem"}
          width={"370px"}
          height={"220px"}
          overflow={"auto"}
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
          justifyContent={"center"}
        >
          <Typography fontWeight={700} color={"red"}>
            Eliminar curso
          </Typography>
          <Alert severity="error">
            Estas seguro que deseas eliminar este curso?
          </Alert>
          <Box display={"flex"} gap={"10px"}>
            <Button
              onClick={() => onSubmit()}
              variant="contained"
              color="error"
            >
              Eliminar curso
            </Button>
            <Button onClick={onCloseDelete} color="primary" variant="outlined">
              Cancelar
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default DashboardProfesor;
