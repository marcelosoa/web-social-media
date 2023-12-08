import { Route, Routes } from "react-router-dom"
import { AuthenticationScreen, RegisterScreen } from "../screens"
import { PrivateRoutes } from "./private"

export const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthenticationScreen />}/>
      <Route path="/register" element={<RegisterScreen />} />
      
      <Route element={<PrivateRoutes />}>
        
      </Route>
    </Routes>
  )
}