import AuthLayout from "layouts/auth";
import { useForm } from "react-hook-form";
import InputPassword from "components/input-password";
import useAuth from "hooks/auth";

function SignInPage() {
  const { register, handleSubmit } = useForm();
  const { signIn } = useAuth();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    signIn(data);
  };

  return (
    <AuthLayout
      onSubmit={handleSubmit(onSubmit)}
      text="Sign-In"
      redirect="sign-up"
      question="You do not have an account yet?">
      <input
        type="email"
        placeholder="Email"
        className="input-auth"
        {...register("email", { required: true })}
      />
      <InputPassword
        register={{ ...register("password", { required: true }) }}
      />
    </AuthLayout>
  );
}

export default SignInPage;
