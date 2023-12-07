import { BrowserRouter } from "react-router-dom";
import AppRouter from "./react router dom/AppRouter";

export function App() {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}
