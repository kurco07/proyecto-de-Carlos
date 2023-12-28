import PropTypes from 'prop-types';
import SimpleAccordion from "../components/SimpleAccordion";
import ComplexAccordion from "../components/ComplexAccordion";
import CommentAccordion from "../components/CommentAccordion"; // Importa el componente CommentAccordion
import Footer from "../components/Footer";
import VideoPlayer from "../components/VideoPlayer";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { capitloCursos, obtenerCursoPorId } from '../services/cursos';
import { login } from '../services/usuarios';
import { Navbar } from '../components/Navbar';
const ReproductorMP4 = ({ comments }) => {
    const { id, id_capitulo } = useParams()
    const [curso, setCurso] = useState({})

    useEffect(() => {

        const cargarData = async () => {
            const publicacion = await obtenerCursoPorId(id)
            const creador = await login(publicacion.cedulaCreador)
            const playlist = await capitloCursos()
            const filterPlayList = playlist.filter(({ idPublicacion }) => idPublicacion === publicacion.idPublicacion)
            setCurso({ creador, publicacion, filterPlayList })
        }

        cargarData()


    }, [id])
    console.log(curso)




    return (
        <>
            {
                curso.publicacion && (
                    <div style={{ paddingBottom: '50px' }}> {/* Aquí se agrega el relleno */}
                        <Navbar isLoggedIn />
                        {curso.filterPlayList && (<>
                            <div style={{ backgroundColor: 'black' }}>
                                <div className="flex justify-center items-center mt-16">
                                    <VideoPlayer src={curso.filterPlayList[
                                        id_capitulo === '0' ? 0 : curso.filterPlayList.findIndex(el => el.idVideoPublicacion == id_capitulo)
                                    ].video_url} />
                                </div>
                            </div>
                            <div style={{ marginLeft: '15%', fontSize: '32px', fontWeight: '700', letterSpacing: '-0.16px', textTransform: 'uppercase', color: '#141E34', lineHeight: '40px', paddingTop: '20px', paddingRight: '5px' }}>
                                <div style={{ display: 'flex' }}>
                                    <p style={{ paddingRight: '5px' }}>{curso.publicacion.tituloPublicacion} |</p>
                                    <p style={{ color: 'var(--Go-to-actions-secondary, #15665A)', fontSize: '24px', fontStyle: 'normal', fontWeight: '700', lineHeight: '40px', letterSpacing: '-0.16px', textTransform: 'uppercase', paddingTop: '2px' }}>{curso.filterPlayList[
                                        id_capitulo === '0' ? 0 : curso.filterPlayList.findIndex(el => el.idVideoPublicacion == id_capitulo)
                                    ].tituloCapitulo}</p>
                                </div>
                            </div>
                        </>


                        )}

                        <div style={{ marginLeft: '15%', fontSize: '32px', fontWeight: '700', letterSpacing: '-0.16px', textTransform: 'uppercase', color: '#141E34', lineHeight: '40px' }}>
                            <p style={{ color: 'var(--input-icon-color, #979CB6)', fontSize: '20px', fontStyle: 'normal', fontWeight: '700', lineHeight: '40px', letterSpacing: '-0.16px', textTransform: 'uppercase' }}>{curso.creador.usuario}</p>
                        </div>
                        <SimpleAccordion title={'Descripcion'} description={curso.publicacion} />

                        <ComplexAccordion capitulos={curso.filterPlayList} creador={curso.creador.usuario} /> {/* Aquí se usa el componente ComplexAccordion */}





                        <CommentAccordion comments={comments} /> {/* Aquí se usa el componente CommentAccordion */}
                        <Footer />
                    </div>
                )

            }
        </>


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










