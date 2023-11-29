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
    <AppBar position="static" style={{ width: "100%" }}>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            width: "100%",
          }}
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {texto1}
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {texto2}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
