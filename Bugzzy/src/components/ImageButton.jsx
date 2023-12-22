// ImageButton.js
// ImageButton.js
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

const ImageButton = ({ image }) => (
    <button style={{display: 'flex', alignItems: 'center', marginBottom: '40px', background: 'none', border: 'none'}}>
        <img src={image.src} alt={image.label} style={{width: '400px', height: '225px', flexShrink: 0, borderRadius: '20px', background: '#C4C4C4', marginRight: '10px'}} />
        <div>
            <Typography style={{color: 'var(--Go-to-actions-secondary, #15665A)',textAlign: 'left', fontSize: '24px', fontStyle: 'normal', fontWeight: '700', lineHeight: '20px', letterSpacing: '-0.16px', textTransform: 'uppercase'}}>
            {image.label}
            </Typography>
            <Typography style={{color: 'var(--input-icon-color, #979CB6)', textAlign: 'left', fontSize: '20px', fontStyle: 'normal', fontWeight: '700', lineHeight: '40px', letterSpacing: '-0.16px', textTransform: 'uppercase'}}>
            {image.secondaryLabel}
            </Typography>
            <Typography style={{color: '#000', fontSize: '16px',textAlign: 'left', fontStyle: 'normal', fontWeight: '700', lineHeight: '20px', letterSpacing: '-0.16px'}}>
            {image.thirdLabel}
            </Typography>
        </div>
    </button>
);

ImageButton.propTypes = {
    image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        secondaryLabel: PropTypes.string.isRequired,
        thirdLabel: PropTypes.string.isRequired,
    }).isRequired,
};

export default ImageButton;
