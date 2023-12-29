import ImportVideoButton from "../components/ImportVideoButton"; // Asegúrate de que la ruta sea correcta

function ImportVideo() {
  return (
    <div>
      <div
        style={{
          borderColor: "#15665A",
          borderWidth: 6,
          borderStyle: "solid",
          borderRadius: "50%",
          width: "150px",
          height: "150px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="106"
          height="102"
          viewBox="0 0 106 102"
          fill="none"
        >
          <path
            d="M0.5 51L54.5 50.5M105 51L54.5 50.5M54.5 50.5V0V51V102"
            stroke="#15665A"
            stroke-width="20"
          />
        </svg>
      </div>
      <ImportVideoButton />
    </div>
  );
}

export default ImportVideo;
