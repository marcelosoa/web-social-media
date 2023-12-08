import { useNavigate } from "react-router-dom";
import { ButtonComponent, InputField } from "../../components";
import { IoEyeOutline, IoMail } from "../../components/icons";

export const AuthenticationScreen = () => {
  const navigate = useNavigate()

  const handleSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="flex items-center justify-center h-screen bg-background flex-col">
      <form className="flex items-center flex-col" onSubmit={handleSubmitForm}>
        <InputField placeholder="Email" error="" startIcon={<IoMail />} />
        <InputField
          placeholder="Password"
          error=""
          endIcon={<IoEyeOutline />}
        />
        <div className="flex gap-2 justify-between w-full mt-6 cursor-pointer">
          <span className="text-text font-bold hover:text-primary" onClick={() => navigate('/register')}>Register</span>
          <span className="text-text font-bold hover:text-primary">Forgot Password</span>
        </div>
        <ButtonComponent color="primary" onClick={() => console.log("connect")}>
          Connect
        </ButtonComponent>
      </form>
    </div>
  );
};
