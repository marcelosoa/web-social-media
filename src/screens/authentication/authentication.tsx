import { Navigate, useNavigate } from "react-router-dom";
import { ButtonComponent, InputField } from "../../components";
import { IoEyeOutline, IoMail } from "../../components/icons";
import { useContext, useState } from "react";
import { AccountModel } from "../../domain";
import { useForm } from "react-hook-form";
import { AuthenticationContext } from "../../context/authentication";

export const AuthenticationScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, account } = useContext(AuthenticationContext)
  
  const navigate = useNavigate();

  const {
    formState: { errors },
  } = useForm<AccountModel>();


  if (account?.id) return <Navigate to={"/home"} />;

  return (
    <div className="flex items-center justify-center h-screen bg-background flex-col">
      <form
        className="flex items-center flex-col"
      >
        <InputField
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          disabled={false}
          error={errors?.email}
          startIcon={<IoMail />}
        />
        <InputField
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          disabled={false}
          error={errors?.password}
          endIcon={<IoEyeOutline />}
        />
        <div className="flex gap-2 justify-between w-full mt-6 cursor-pointer">
          <span
            className="text-text font-bold hover:text-primary"
            onClick={() => navigate("/register")}
          >
            Register
          </span>
          <span className="text-text font-bold hover:text-primary">
            Forgot Password
          </span>
        </div>
        <ButtonComponent color="primary" onClick={() => signIn({email, password})}>
          Connect
        </ButtonComponent>
      </form>
    </div>
  );
};
