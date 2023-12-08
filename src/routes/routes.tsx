import { Route, Routes } from "react-router-dom"
import { AuthenticationScreen, HomeScreen, RegisterScreen } from "../screens"
import { PrivateRoutes } from "./private"

export const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthenticationScreen />}/>
      <Route path="/register" element={<RegisterScreen />} />
      <Route element={<PrivateRoutes />}>
        <Route path="home">
          <Route element={<HomeScreen />}  path="/home"/>
        </Route>
      </Route>
    </Routes>
  )
}