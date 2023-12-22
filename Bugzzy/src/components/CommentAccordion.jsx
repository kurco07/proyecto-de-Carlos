import React from 'react';
import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

const CommentAccordion = ({ comments }) => {
    return (
        <div>
            <Accordion style={{boxShadow: 'none'}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography style={{fontWeight: 'bold', fontSize: '25px', fontStyle: 'normal', lineHeight: '40px', letterSpacing: '-0.16px', textTransform: 'uppercase', paddingLeft:'50px'}}>Comentarios</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{ width: '100%', paddingLeft:'20px' }}>
                        {comments.map((comment, index) => (
                            <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1, paddingLeft:'20px', backgroundColor: '#ADD8E6', borderRadius: '10px' }}>
                                <Avatar alt={comment.name} src={comment.image} style={{marginRight: '10px'}}/>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Typography style={{fontWeight: 'bold', paddingTop:'10px'}}>{comment.name}</Typography>
                                    <Typography style={{paddingBottom:'10px'}}>{comment.text}</Typography>
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
