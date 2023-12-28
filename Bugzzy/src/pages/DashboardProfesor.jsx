import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import { Navbar } from '../components/Navbar'
import VideoCallIcon from '@mui/icons-material/VideoCall';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import CommentIcon from '@mui/icons-material/Comment';

const DashboardProfesor = () => {
  return (
    <Box
      bgcolor={'#13161c'}
      height={'100vh'}
      width={'100vw'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Navbar isLoggedIn={true} />

      <Box display={'flex'} flexDirection={'column'} width={'670px'}>

        <Box alignItems={'center'} justifyContent={'center'} gap={'10px'} display={'flex'} flexDirection={'row'}>
          <Box padding={'10px'} borderRadius={'0.75rem'} height={'150px'} width={'32%'} sx={{
            background: 'linear-gradient(45deg, #C5DD4A, #FFC04D)',
            boxShadow: '0px 4px 10px #E3B673 '
          }}>
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
            boxShadow: '0px 4px 10px #B46C37 '
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


      </Box >

    </Box >
  )
}

export default DashboardProfesor