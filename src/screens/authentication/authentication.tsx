import { ButtonComponent, InputField } from "../../components";
import { IoEyeOutline, IoMail } from "../../components/icons";

export const AuthenticationScreen = () => {

  const handleSubmitForm = (event: React.FormEvent) => {
    event.preventDefault()
  }

  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <form className="flex items-center flex-col" onSubmit={handleSubmitForm}>
        <InputField placeholder="Email" error="" startIcon={<IoMail />}/>
        <InputField placeholder="Password" error="" endIcon={<IoEyeOutline />}/>
        <ButtonComponent color="primary" onClick={() => console.log('connect')}>Connect</ButtonComponent>
      </form>
    </div>
  );
};
