import React from 'react';
import PropTypes from 'prop-types'; // Asegúrate de importar PropTypes
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SimpleAccordion = ({ title, description }) => {
    return (
        <div>
            <Accordion style={{ boxShadow: 'none' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography style={{ color: 'var(--Secondary-color, #141E34)', fontSize: '30px', fontStyle: 'normal', fontWeight: '700', lineHeight: '40px', letterSpacing: '-0.16px', textTransform: 'uppercase', paddingLeft: '50px', paddingTop: '30px' }}>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {console.log(description)}
                    <Typography style={{ color: '#000', fontSize: '16px', fontStyle: 'normal', fontWeight: '550', justifyContent: 'center', lineHeight: '20px', letterSpacing: '-0.16px', paddingLeft: '100px', paddingRight: '100px' }}>
                        {description.descripcionPublicacion}
                    </Typography>

                    <Typography mt={'30px'} style={{ color: '#979CB6', fontSize: '16px', fontStyle: 'normal', fontWeight: '550', justifyContent: 'center', lineHeight: '20px', letterSpacing: '-0.16px', paddingLeft: '40px' }}>
                        {description.fechaPublicacion}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

SimpleAccordion.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    src: PropTypes.string,
};

export default SimpleAccordion;

