import VideoPlayer from "../components/VideoPlayer";
import video from "../assets/videos/video.mp4"


const ReproductorMP4 = ()=>{
    return( 
        <div>
            <VideoPlayer src={video}/>
        </div>
);

}

export default ReproductorMP4;