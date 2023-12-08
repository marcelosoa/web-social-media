import { useContext, useState } from "react";
import { ButtonComponent, InputField } from "../../components";
import { IoEyeOutline, IoMail } from "../../components/icons";
import { AuthenticationContext } from "../../context/authentication";

export const RegisterScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  console.log({email, password}, 'formulario de email')

  const { signUp, isLoading } = useContext(AuthenticationContext)

  return (
    <div className="flex items-center justify-center h-screen bg-background flex-col">
      <div>
        <span className="text-text font-bold">Register Form</span>
        <form>
          <div className="flex items-center flex-col">
            <InputField 
              placeholder="Email" 
              value={email}
              error="" 
              startIcon={<IoMail />} 
              onChange={(event) => setEmail(event.target.value)}
              />
            <InputField
              placeholder="Password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              error=""
              endIcon={<IoEyeOutline />}
            />
          </div>
          {isLoading ? <span className="text-text">Criando conta..</span> : ''}
          <ButtonComponent
              color="primary"
              onClick={() => signUp({email, password})}
            >
              Register
            </ButtonComponent>
        </form>
      </div>
    </div>
  );
};
