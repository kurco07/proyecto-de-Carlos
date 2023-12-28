import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";

import "./main.css"

export function App() {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}
