import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
    return (
        <Box sx={{
            position: 'fixed',
            bottom: '0',
            width: '100%',
            zIndex: '1',
            backgroundColor: '#141E34',
            color: '#C5DD4A',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px'
        }}>

        </Box>
    );
}

export default Footer;
