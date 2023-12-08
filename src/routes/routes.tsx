import { Route, Routes } from "react-router-dom"
import { AuthenticationScreen } from "../screens"
import { PrivateRoutes } from "./private"

export const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthenticationScreen />}/>
      
      <Route element={<PrivateRoutes />}>
        
      </Route>
    </Routes>
  )
}