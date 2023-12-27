import React from 'react'

const VideoPlayer = ({ src }) => {
    return (
        <div className='relative shadow-black overflow-hidden w-[900px] h-[500px] drop-shadow-sm group'>
            <video type="video/mp4" src={src} className='w-full h-full object-cover ' controls></video>

        </div>
    )
}

export default VideoPlayer;