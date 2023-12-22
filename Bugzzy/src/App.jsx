import { BrowserRouter } from "react-router-dom";
import AppRouter from "./react router dom/AppRouter";
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
