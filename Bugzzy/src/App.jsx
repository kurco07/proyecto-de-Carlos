import { BrowserRouter } from "react-router-dom";
import { ChangePassword } from "./components/ChangePassword";
import AppMui from "./mui/AppMui";
import { Login } from "./pages/Login";
import AppRouter from "./react router dom/AppRouter";

export function App() {
  // return <ChangePassword />;
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}
