import { Box, Button, InputLabel, MenuItem, Modal, Select, TextField, TextareaAutosize, Typography } from '@mui/material'
import React from 'react'
import ImportVideo from '../pages/ImportVideo'

const CrearCursoModal = ({ isOpen, closeModal, currentUser }) => {
  return (
    <Modal sx={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }} onClose={closeModal} open={isOpen}>
      <Box padding={'50px'} bgcolor={'white'} borderRadius={'0.75rem'} width={'670px'} height={'670px'}>
        <Typography fontSize={'20px'} mb={'10px'} >Herramienta de creacion de cursos</Typography>
        <InputLabel sx={{
          mb: '10px'
        }}>Ingrese la informacion del curso</InputLabel>


        <Box gap={'10px'} display={'flex'} flexDirection={'column'}>
          <TextField required helperText='El nombre esta compuesto de letras de A-Za-z' size='small' label='Nombre de curso' variant='filled' fullWidth placeholder='Ingrese nombre de curso' />
          <TextField required helperText='La descripcion esta compuesto de letras de A-Za-z, simbolos y emojis' size='small' multiline maxRows={5} label='Descripcion de curso' variant='filled' fullWidth placeholder='Ingrese la descripcion del curso' />

          <InputLabel label="input-file">Nombre del profesor</InputLabel>

          <TextField required helperText='El nombre del autor es el usuario que suba el curso' size='small' disabled value={currentUser.usuario} variant='standard' fullWidth placeholder='Ingrese nombre de curso' />
          <InputLabel id="select-especilidad">Categoria</InputLabel>
          <Select

            required
            variant="standard"
          >
            <MenuItem value={"Cuerpo directivo"}>Ingenieria</MenuItem>

            <MenuItem value={"Cuerpo directivo"}>Programacion</MenuItem>

            <MenuItem value={"Cuerpo directivo"}>Python</MenuItem>

            <MenuItem value={"Cuerpo directivo"}>JavaScript</MenuItem>


            <MenuItem value={"Mantenimiento"}>Administracion de empresas</MenuItem>

            <MenuItem value={"Educacion inicial"}>Derecho</MenuItem>

            <MenuItem value={"Educacion primaria"}>Educacion</MenuItem>

            <MenuItem value={"Educacion media"}>Diseño grafico</MenuItem>

            <MenuItem value={"Educacion media"}>Contaduria</MenuItem>

            <MenuItem value={"Educacion media"}>Electronica</MenuItem>


          </Select>
          <InputLabel label="input-file">Miniatura del curso</InputLabel>
          <TextField
            variant="standard"
            helperText="Agregar una imagen colorida y de buena calidad"
            required
            type="file"
          />
        </Box>
        <Box mt={'30px'} display={'flex'} gap={'10px'}>
          <Button variant='contained'>Publicar</Button>
          <Button variant='text'>Cancelar</Button>

        </Box>
      </Box>
    </Modal>
  )
}

export default CrearCursoModal