import PropTypes from 'prop-types';
import SimpleAccordion from "../components/SimpleAccordion";
import ComplexAccordion from "../components/ComplexAccordion";
import CommentAccordion from "../components/CommentAccordion"; // Importa el componente CommentAccordion
import Footer from "../components/Footer";
import VideoPlayer from "../components/VideoPlayer";
import video from "../assets/videos/video.mp4";
import { SearchNavbar } from "../components/SearchNavbar";
import { useParams } from 'react-router-dom';
const ReproductorMP4 = ({ title, description, labelText, secondLabelText, thirdLabelText, images, comments }) => {
    const url = useParams()
    console.log(url)
    return (
        <div style={{ paddingBottom: '50px' }}> {/* Aquí se agrega el relleno */}
            <SearchNavbar /> {/* Aquí se pasa la prop showSearchBar */}
            <div style={{ backgroundColor: 'black' }}>
                <div className="flex justify-center items-center mt-16">
                    <VideoPlayer src={video} />
                </div>
            </div>
            <div style={{ marginLeft: '15%', fontSize: '32px', fontWeight: '700', letterSpacing: '-0.16px', textTransform: 'uppercase', color: '#141E34', lineHeight: '40px', paddingTop: '20px', paddingRight: '5px' }}>
                <div style={{ display: 'flex' }}>
                    <p style={{ paddingRight: '5px' }}>{labelText} |</p>
                    <p style={{ color: 'var(--Go-to-actions-secondary, #15665A)', fontSize: '24px', fontStyle: 'normal', fontWeight: '700', lineHeight: '40px', letterSpacing: '-0.16px', textTransform: 'uppercase', paddingTop: '2px' }}>{secondLabelText}</p>
                </div>
            </div>
            <div style={{ marginLeft: '15%', fontSize: '32px', fontWeight: '700', letterSpacing: '-0.16px', textTransform: 'uppercase', color: '#141E34', lineHeight: '40px' }}>
                <p style={{ color: 'var(--input-icon-color, #979CB6)', fontSize: '20px', fontStyle: 'normal', fontWeight: '700', lineHeight: '40px', letterSpacing: '-0.16px', textTransform: 'uppercase' }}>{thirdLabelText}</p>
            </div>
            <SimpleAccordion title={title} description={description} />
            <ComplexAccordion images={images} /> {/* Aquí se usa el componente ComplexAccordion */}
            <CommentAccordion comments={comments} /> {/* Aquí se usa el componente CommentAccordion */}
            <Footer />
        </div>
    );
}

ReproductorMP4.propTypes = {
    labelText: PropTypes.string.isRequired,
    secondLabelText: PropTypes.string.isRequired,
    thirdLabelText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    src: PropTypes.string,
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ReproductorMP4;










