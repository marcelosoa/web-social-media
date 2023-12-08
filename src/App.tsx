import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { RouterApp } from "./routes/routes";
import { AuthenticationProvider } from "./context/authentication";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AuthenticationProvider>
      <BrowserRouter>
        <RouterApp />
        <ToastContainer />
      </BrowserRouter>
    </AuthenticationProvider>
  );
}

export default App;
