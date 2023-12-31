import { Box, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const ProfesorNotofication = ({ rol }) => {

  const navigate = useNavigate()

  return (
    <Box>
      {rol === 'Profesor' && <Box height={'80px'} width={'670px'} mt={'20px'} borderRadius={'0.76rem'} sx={{
        background: 'linear-gradient(45deg, rgba(0, 191, 165, 1), rgba(0, 211, 182, 1))',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        backgroundBlendMode: 'multiply'
      }} >
        <Box display={'flex'} flexDirection={'column'} height={'100%'} padding={'20px'} justifyContent={'center'}>
          <Typography fontWeight={700}>Estas en una cuenta de profesor</Typography>
          <Box onClick={(() => navigate('/dashboard-profesor'))} component={'button'} sx={{
            '&:hover': {

              scale: '1 1.05'
            }
          }} color={'#000000'} display={'flex'} alignItems={'center'}>
            <Typography borderBottom={'1px solid #000000'} fontSize="12px">Dashboard profesor</Typography>
            <ArrowForwardIosIcon sx={{ ml: '5px' }} fontSize="" />
          </Box>
        </Box>
      </Box>}
    </Box>
  )
}

export default ProfesorNotofication