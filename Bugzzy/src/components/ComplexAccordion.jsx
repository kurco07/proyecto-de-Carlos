
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ImageButton from './ImageButton'; // Asegúrate de que la ruta de importación sea correcta

const ImageAccordion = ({ capitulos = [], creador }) => {
    return (
        <div>
            <Accordion style={{ boxShadow: 'none' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography style={{ color: 'var(--Secondary-color, #141E34)', fontSize: '25px', fontStyle: 'normal', fontWeight: '700', lineHeight: '40px', letterSpacing: '-0.16px', textTransform: 'uppercase', paddingLeft: '50px' }}>Capítulos del Curso</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '20px' }}>
                        {capitulos.map((el, index) => (
                            <ImageButton key={index} creador={creador} data={el} />
                        ))}
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}


export default ImageAccordion;


