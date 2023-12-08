import { useContext } from "react"
import { AuthenticationContext } from "../../context/authentication"

export const HomeScreen = () => {
  const { account } = useContext(AuthenticationContext)

  console.log(account, 'account')
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}