import { Box, Button, Divider, Typography } from '@mui/material'
import { Navbar } from '../components/Navbar'
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import CommentIcon from '@mui/icons-material/Comment';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { capitloCursos, obtenerCursos } from '../services/cursos';
import { login } from '../services/usuarios';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import CrearCursoModal from '../components/CrearCursoModal';
import AddIcon from '@mui/icons-material/Add';
const DashboardProfesor = () => {
  const [cursos, setCursos] = useState([]);
  const [currentUser, setCurrentUser] = useState({})
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    const cargarCursos = async () => {
      const response = await obtenerCursos();
      const playlist = await capitloCursos();
      const getUser = await login(localStorage.getItem('cedula'))
      setCursos({ playlist, response });
      setCurrentUser(getUser)
    };

    cargarCursos();

  }, []);

  const onClose = () => setIsOpen(false)

  const verCurso = (curso) => {
    navigate(`/reproductorMP4/${curso}/0`);
  };
  return (
    <Box
      bgcolor={'#13161c'}
      height={'auto'}
      width={'100vw'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      paddingBottom={'40px'}
      minHeight={'1100px'}

    >
      <Navbar isLoggedIn={true} />

      <Box mt={'100px'} display={'flex'} flexDirection={'column'} width={'670px'}>
        <Typography mb={'10px'} variant='h6' textAlign={'left'} color={'white'}>Estadisticas</Typography>
        <Box alignItems={'center'} justifyContent={'center'} gap={'10px'} display={'flex'} flexDirection={'row'}>
          <Box padding={'10px'} borderRadius={'0.75rem'} height={'150px'} width={'32%'} sx={{
            background: 'linear-gradient(45deg, #C5DD4A, #FFC04D)',
            boxShadow: '0px 4px 10px #E3B673',

          }
          } >
            <Box display={'flex'} height={'100%'} flexDirection={'column'} justifyContent={'center'}>
              <Box display={'flex'} alignItems={'center'} gap={'30px'}>
                <Typography height={'70px'} color={'#1e2229'} fontSize={'55px'} fontWeight={700}>55</Typography>
                <VideoCallIcon sx={{
                  mt: '15px',
                  fontSize: '55px'
                }} color='disabled' />
              </Box>
              <Divider />
              <Typography mt={'5px'} color={'#1e2229'} fontSize={'11px'} >Capitulos publicados</Typography>

            </Box>
          </Box>
          <Box padding={'10px'} borderRadius={'0.75rem'} height={'150px'} width={'32%'} sx={{
            background: 'linear-gradient(45deg, rgb(222, 90, 17), rgb(255, 194, 38))',
            boxShadow: '0px 4px 10px #B46C37',

          }}>
            <Box display={'flex'} height={'100%'} flexDirection={'column'} justifyContent={'center'}>
              <Box display={'flex'} alignItems={'center'} gap={'30px'}>
                <Typography height={'70px'} color={'#1e2229'} fontSize={'55px'} fontWeight={700}>06</Typography>
                <FolderCopyIcon sx={{
                  mt: '15px',
                  fontSize: '55px'
                }} color='disabled' />
              </Box>
              <Divider />
              <Typography mt={'5px'} color={'#1e2229'} fontSize={'11px'} >Cursos publicados</Typography>
            </Box>



          </Box>
          <Box padding={'10px'} borderRadius={'0.75rem'} height={'150px'} width={'32%'} sx={{
            background: 'linear-gradient(45deg, #C5DD4A, #7EE87F)',
            boxShadow: '0px 4px 10px #82A763 '
          }}>
            <Box display={'flex'} height={'100%'} flexDirection={'column'} justifyContent={'center'}>
              <Box display={'flex'} alignItems={'center'} gap={'30px'}>
                <Typography height={'70px'} color={'#1e2229'} fontSize={'55px'} fontWeight={700}>352</Typography>
                <CommentIcon sx={{
                  mt: '15px',
                  fontSize: '55px'
                }} color='disabled' />
              </Box>
              <Divider />
              <Typography mt={'5px'} color={'#1e2229'} fontSize={'11px'} >Comentarios recibidos</Typography>
            </Box>


          </Box>


        </Box>

        <Box width={'100%'} mt={'30px'}>
          <Typography variant='h6' textAlign={'left'} color={'white'}>Comienza a compartir</Typography>
          {/* Boton de agregar curso */}
          <Box component={'button'} onClick={() => setIsOpen(true)} mt={'10px'} padding={'10px'} borderRadius={'0.75rem'} height={'60px'} width={'100%'} sx={{
            background: 'linear-gradient(45deg, #a85ee6, #ffacf2)',
            boxShadow: '0px 4px 10px #5c2d83 ',
            transition: 'all .5s',

            '&:hover': {
              transform: 'scale(1.02)',
              boxShadow: '0px 8px 14px #5c2d83',
              cursor: 'pointer',
              transition: 'all .5s'
            }
          }}>
            <Box display={'flex'} height={'100%'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
              <Typography fontWeight={700}>Agregar cursos</Typography>
              <ArrowForwardIosIcon />
            </Box>


          </Box>

        </Box>
        <Box width={'100%'} mt={'30px'}>
          <Typography variant='h6' textAlign={'left'} color={'white'}>Mis cursos</Typography>

          <Box width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
            {/* Secciones de Cursos Destacados */}
            {cursos.response && (
              <>
                <Box width={'670px'} mt={"20px"} display={'flex'} flexDirection={'column'} gap={'10px'}>
                  {cursos.response.map(
                    ({
                      idPublicacion,
                      tituloPublicacion,
                      descripcionPublicacion,

                    }) => (
                      <Box sx={{
                        transition: 'all .5s'
                        ,
                        '&:hover': {
                          transform: 'scale(1.009)',
                          boxShadow: '0px 5px 10px #ffffff50',
                          cursor: 'pointer',
                          transition: 'all .5s'
                        }
                      }} height={'260px'} key={idPublicacion} border={'1px solid #2d323a'} borderRadius={'0.75rem'} display={'flex'} flexDirection={'row-reverse'}>
                        {/* Aquí puedes colocar la imagen y los detalles del curso */}



                        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} color={'white'} width={'100%'} padding={'20px'} gap={'10px'} zIndex={'999'} >
                          <SlowMotionVideoIcon color="info" />
                          <Typography color={'#C5DD4A'} variant="subtitle1" >
                            {tituloPublicacion}
                          </Typography>
                          <Typography fontSize={'10px'} color={'#ffffff70'}>
                            12 Clases | Certificado de finalizacion
                          </Typography>
                          <Typography fontSize={'13px'} color={'#c4c8ce'}>
                            {descripcionPublicacion.slice(0, 300)}...
                          </Typography>

                          <Box gap={'10px'} display={'flex'}>
                            <Button
                              sx={{
                                bgcolor: 'white', color: 'black', width: '130px',
                                '&:hover': {
                                  bgcolor: '#ffffff',

                                  scale: '1.02'
                                }
                              }}
                              onClick={() => verCurso(idPublicacion)}
                              size="small"
                              variant="contained"
                              endIcon={<ArrowForwardIcon fontSize='small' />}

                            >
                              Ir al curso
                            </Button>
                            <Button
                              sx={{
                                bgcolor: 'white', color: 'black', width: '130px',
                                '&:hover': {
                                  bgcolor: '#ffffff',

                                  scale: '1.02'
                                }
                              }}
                              onClick={() => verCurso(idPublicacion)}
                              size="small"
                              variant="contained"
                              endIcon={<EditIcon fontSize='small' />}
                            >
                              Editar
                            </Button>

                            <Button
                              sx={{
                                bgcolor: 'white', color: 'black', width: '190px',
                                '&:hover': {
                                  bgcolor: '#ffffff',

                                  scale: '1.02'
                                }
                              }}
                              onClick={() => verCurso(idPublicacion)}
                              size="small"
                              variant="contained"
                              endIcon={<AddIcon fontSize='small' />}
                            >
                              Agregar videos
                            </Button>

                            <Button
                              sx={{
                                bgcolor: 'white', color: 'black', width: '130px',
                                '&:hover': {
                                  bgcolor: '#ffffff',

                                  scale: '1.02'
                                }
                              }}
                              onClick={() => verCurso(idPublicacion)}
                              size="small"
                              variant="contained"
                              endIcon={<ClearIcon fontSize='small' />}
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
      <CrearCursoModal isOpen={isOpen} currentUser={currentUser} closeModal={onClose} />
    </Box>
  )
}

export default DashboardProfesor