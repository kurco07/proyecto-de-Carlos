import { Box, Modal } from '@mui/material'
import React from 'react'

const CrearCursoModal = ({ isOpen, closeModal }) => {
  return (
    <Modal sx={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }} onClose={closeModal} open={isOpen}>
      <Box bgcolor={'white'} borderRadius={'0.75rem'} width={'670px'} height={'670px'}>

      </Box>
    </Modal>
  )
}

export default CrearCursoModal