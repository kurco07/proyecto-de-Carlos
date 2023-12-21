import PropTypes from 'prop-types';
import VideoPlayer from "../components/VideoPlayer";
import video from "../assets/videos/video.mp4"
import { SearchNavbar } from "../components/SearchNavbar";


const ReproductorMP4 = ({ labelText }) => {
    return( 
        <div>
            <SearchNavbar/> {/* Aquí se pasa la prop showSearchBar */}
            <div className="flex justify-center items-center mt-16">
                <VideoPlayer src={video}/>
            </div>
            <div style={{ marginLeft: '15%', fontSize: '32px', fontWeight: '700', letterSpacing: '-0.16px', textTransform: 'uppercase', color: '#141E34' }}>
                <p>{labelText}</p>
            </div>
        </div>
    );
}

ReproductorMP4.propTypes = {
    labelText: PropTypes.string.isRequired,
};

export default ReproductorMP4;

