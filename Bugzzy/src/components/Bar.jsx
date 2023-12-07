// import React from "react";
// import { AppBar, Toolbar, Typography } from "@mui/material";

// export function Bar() {
//   return (
//     <AppBar position="static" style={{ width: "100%" }}>
//       <Toolbar sx={{ display: "flex", flexDirection: "column" }}>
//         {/* <Typography
//           variant="h6"
//           component="div"
//           sx={{ flexGrow: 1, textAlign: "center" }}
//         >
//           Bienvenido a Buggzy
//         </Typography>
//         <Typography
//           variant="h6"
//           component="div"
//           sx={{ flexGrow: 1, textAlign: "center" }}
//         >
//           Somos su apoyo en la etapa de aprendizaje
//         </Typography> */}
//       </Toolbar>
//     </AppBar>
//   );
// }

import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export function Bar({ texto1, texto2 }) {
  return (
    <AppBar
      position="static"
      style={{ width: "100%", backgroundColor: "#141E34", color: "#C5DD4A" }}
    >
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            width: "100%",
            padding: "5px",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontSize: "32px", fontWeight: "bold" }}
          >
            {texto1}
          </Typography>
          <Typography
            variant="h6"
            component="div"
            color="#FFFF"
            sx={{ flexGrow: 1, fontSize: "32px", fontWeight: "bold" }}
          >
            {texto2}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
