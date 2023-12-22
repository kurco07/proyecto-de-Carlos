import React from 'react';
import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
            <div style={{display: 'flex', flexDirection: 'column'}}>
                {images.map((image, index) => (
                <div key={index} style={{display: 'flex', alignItems: 'center', marginBottom: '40px'}}>
                    <img src={image.src} alt={image.label} style={{width: '400px', height: '225px', flexShrink: 0, borderRadius: '20px', background: '#C4C4C4', marginRight: '10px'}} />
                    <Typography style={{color: '#000', fontSize: '24px', fontStyle: 'normal', fontWeight: '700', lineHeight: '20px', letterSpacing: '-0.16px'}}>
                    {image.label}
                    </Typography>
                </div>
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
        })
    ).isRequired,
};

export default ImageAccordion;

