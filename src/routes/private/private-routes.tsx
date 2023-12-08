import { useContext } from "react"
import { AuthenticationContext } from "../../context/authentication"
import { Navigate, Outlet } from "react-router-dom"

export const PrivateRoutes = () => {
  const { account } = useContext(AuthenticationContext)
  
  return account ? <Outlet /> : <Navigate  to='/' replace/>
  
}