import { Route, Routes } from "react-router-dom";
import { Landing } from "../pages/Landing";
import { Login } from "../pages/Login";
import Register from "../pages/Register";
import ReproductorMP4 from "../pages/ReproductorMP4";
import Reset from "../pages/Reset";
import HomePage from "../pages/HomePage";
import MyCourses from "../pages/MyCourses";
import ImportVideo from "../pages/ImportVideo";

import { LoginContextProvider } from "../useContext/LoginContext";
import { ProtectedLogin } from "./ProtectedRoutes";
import Profile from "../pages/Profile";
import RegisterProfesores from "../pages/registerProfesor";
import DashboardProfesor from "../pages/DashboardProfesor";
import TodosLosCursos from "../pages/TodosLosCursos";

const AppRouter = () => {
  // Define tus imágenes y etiquetas aquí
  const images = [
    {
      src: "https://i1.sndcdn.com/artworks-jed24yeHGhe9LXDz-ZRaA5A-t500x500.jpg",
      label: "Título Capitulo Curso",
      secondaryLabel: "Nombre del Curso",
      thirdLabel: "Blaquiti Blaquiti BlaBlaBla",
    },
    {
      src: "https://t2.ea.ltmcdn.com/es/posts/4/2/1/el_erizo_como_mascota_2124_600_square.jpg",
      label: "Etiqueta 2",
      secondaryLabel: "Texto secundario 2",
      thirdLabel: "Texto terciario 2",
    },
    {
      src: "https://i.pinimg.com/736x/09/1d/85/091d8519fd798d73f21823ddaac2d34d.jpg",
      label: "Etiqueta 3",
      secondaryLabel: "Texto secundario 3",
      thirdLabel: "Texto terciario 3",
    },
  ];

  // Define tus comentarios aquí
  const comments = [
    {
      image: "https://example.com/user1.jpg",
      name: "Usuario 1",
      text: "Comentario 1",
    },
    {
      image: "https://example.com/user2.jpg",
      name: "Usuario 2",
      text: "Comentario 2",
    },
    // Añade más comentarios según sea necesario
  ];

  return (
    <LoginContextProvider>
      <Routes>
        <Route index path="/" element={<Landing />} />
        <Route index path="/login" element={<Login />} />
        <Route index path="/register" element={<Register />} />
        <Route
          index
          path="/register-profesores"
          element={<RegisterProfesores />}
        />
        <Route
          index
          path="/dashboard-profesor"
          element={<DashboardProfesor />}
        />
        <Route index path="/reset" element={<Reset />} />
        <Route index path="/cargarVideo" element={<ImportVideo />} />
        <Route
          index
          path="/homepage"
          element={
            <ProtectedLogin redirectTo={"/login"}>
              <HomePage />
            </ProtectedLogin>
          }
        />
        <Route index path="/cursos-progreso" element={<MyCourses />} />
        <Route index path="/cursos" element={<TodosLosCursos />} />

        <Route index path="/profile" element={<Profile />} />
        <Route
          index
          path="/reproductormp4/:id/:id_capitulo"
          element={<ReproductorMP4 />}
        />

        <Route index path="/reproductormp4/:id/" element={<ReproductorMP4 />} />
        {/* Aquí se usa el componente CommentAccordion */}
      </Routes>
    </LoginContextProvider>
  );
};

export default AppRouter;
