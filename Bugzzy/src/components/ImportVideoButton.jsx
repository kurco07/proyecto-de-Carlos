import React, { useState } from 'react';
import Button from '@mui/material/Button';

function ImportVideoButton() {
    const [videoFile, setVideoFile] = useState(null);

    const handleFileChange = (event) => {
        setVideoFile(event.target.files[0]);
    };

    return (
        <div>
            <Button variant="contained" component="label" style={{ backgroundColor: '#15665A', color: 'white' }}>
                Importar vídeo
                <input
                    multiple
                    type="file"
                    hidden
                    accept="video/*"
                    onChange={handleFileChange}
                />
            </Button>
            {videoFile && <p>Archivo seleccionado: {videoFile.name}</p>}
        </div>
    );
}

export default ImportVideoButton;

