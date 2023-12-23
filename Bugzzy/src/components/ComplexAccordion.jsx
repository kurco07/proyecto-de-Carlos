// ImageAccordion.js
import React from 'react';
import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ImageButton from './ImageButton'; // Asegúrate de que la ruta de importación sea correcta

const ImageAccordion = ({ images }) => {
    return (
        <div>
        <Accordion style={{boxShadow: 'none'}}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography style={{color: 'var(--Secondary-color, #141E34)', fontSize: '25px', fontStyle: 'normal', fontWeight: '700', lineHeight: '40px', letterSpacing: '-0.16px', textTransform: 'uppercase', paddingLeft:'50px'}}>Capítulos del Curso</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <div style={{display: 'flex', flexDirection: 'column', paddingLeft:'20px'}}>
                {images.map((image, index) => (
                <ImageButton key={index} image={image} />
                ))}
            </div>
            </AccordionDetails>
        </Accordion>
        </div>
    );
}

ImageAccordion.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
        src: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        secondaryLabel: PropTypes.string.isRequired,
    })
    ).isRequired,
};

export default ImageAccordion;


