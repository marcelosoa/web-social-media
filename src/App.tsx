import { BrowserRouter } from "react-router-dom"
import { RouterApp } from "./routes/routes"
import { AuthenticationProvider } from "./context/authentication"

function App() {
  return (
    <BrowserRouter>
      <AuthenticationProvider>
        <RouterApp />
      </AuthenticationProvider>
    </BrowserRouter>
  );
}

export default App
