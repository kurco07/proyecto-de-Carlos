// ImageButton.js
// ImageButton.js
import Typography from "@mui/material/Typography";
import { useNavigate, useParams } from "react-router-dom";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const ImageButton = ({ data, creador }) => {
  const navigate = useNavigate();
  const { id, id_capitulo } = useParams();

  return (
    <>
      <button
        onClick={() =>
          navigate(`/reproductorMP4/${id}/${data.idVideoPublicacion}`)
        }
        style={{
          borderRadius: "20px",
          padding: "10px",
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
          backgroundColor:
            id_capitulo == data.idVideoPublicacion ? "#D2EAFF" : "#FFFFFF",
          border: "none",
        }}
      >
        <img
          src={data.miniatura}
          alt={data.tituloCapitulo}
          style={{
            width: "400px",
            height: "225px",
            flexShrink: 0,
            borderRadius: "20px",
            background: "#C4C4C4",
            marginRight: "10px",
          }}
        />
        <PlayCircleIcon
          sx={{
            position: "absolute",
            ml: "150px",
            mt: "10px",
            fontSize: "80px",
            color: "#00000090",
          }}
        />
        <div>
          <Typography
            style={{
              color: "var(--Go-to-actions-secondary, #15665A)",
              textAlign: "left",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "20px",
              letterSpacing: "-0.16px",
              textTransform: "uppercase",
            }}
          >
            {data.tituloCapitulo}
          </Typography>
          <Typography
            style={{
              color: "var(--input-icon-color, #979CB6)",
              textAlign: "left",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "40px",
              letterSpacing: "-0.16px",
              textTransform: "uppercase",
            }}
          >
            {creador}
          </Typography>
          <Typography
            style={{
              color: "#000",
              fontSize: "16px",
              textAlign: "left",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "20px",
              letterSpacing: "-0.16px",
            }}
          >
            {data.descripcionCapitulo}
          </Typography>
        </div>
      </button>
    </>
  );
};

export default ImageButton;
