import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import { comentar, comentariosCursos } from '../services/cursos';
import { useParams } from 'react-router-dom';

const CommentAccordion = () => {
    const [comentario, setComentario] = useState('')
    const [cargarComents, setCargarComents] = useState([])
    const { id_capitulo } = useParams()

    useEffect(() => {

        const cargarData = async () => {
            const comentarios = await comentariosCursos()
            const comentariosFilter = comentarios.filter(({ idCapituloPublicacion }) => idCapituloPublicacion == id_capitulo)
            setCargarComents(comentariosFilter)
        }

        cargarData()


    }, [id_capitulo])
    const enviarComentario = async () => {
        const response = await comentar({
            "comentario": comentario,
            "idCapituloPublicacion": id_capitulo,
            "cedulaComentarista": "12127736"
        })
        setCargarComents([...cargarComents, response]);
        setComentario('')
        console.log(cargarComents)
    }

    return (
        <div>
            <Accordion style={{ boxShadow: 'none' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography style={{ fontWeight: 'bold', fontSize: '25px', fontStyle: 'normal', lineHeight: '40px', letterSpacing: '-0.16px', textTransform: 'uppercase', paddingLeft: '50px' }}>Comentarios</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{ width: '100%', paddingLeft: '20px' }}>
                        <Box gap={'10px'} sx={{ display: 'flex', alignItems: 'center', mb: 1, padding: '20px', backgroundColor: '#ADD8E6', borderRadius: '10px' }}>
                            <Avatar />
                            <TextField value={comentario} onChange={({ target }) => setComentario(target.value)} variant='standard' placeholder='Escribe un comentario..' fullWidth size='small' />
                            <Button onClick={() => enviarComentario()} disabled={comentario === ''} variant='contained'>Comentar</Button>
                        </Box>
                        {cargarComents.map(({ idComentarioPublicacion, comentario, cedulaComentarista }) => (
                            <Box key={idComentarioPublicacion} sx={{ display: 'flex', alignItems: 'center', mb: 1, paddingLeft: '20px', backgroundColor: '#ADD8E6', borderRadius: '10px' }}>
                                <Avatar style={{ marginRight: '10px' }} />
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Typography style={{ fontWeight: 'bold', paddingTop: '10px' }}>{cedulaComentarista}</Typography>
                                    <Typography style={{ paddingBottom: '10px' }}>{comentario}</Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

CommentAccordion.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default CommentAccordion;
