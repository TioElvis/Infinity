import InputPassword from "components/input-password";
import useAuth from "hooks/auth";
import AuthLayout from "layouts/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const { register, handleSubmit } = useForm();
  const { signIn, hashError } = useAuth();

  const navigate = useNavigate();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    signIn(data);
    if (!hashError) navigate("/auth/sign-in");
  };

  return (
    <AuthLayout
      onSubmit={handleSubmit(onSubmit)}
      text="Sign-up"
      redirect="sign-in"
      question="Do you already have an account?">
      <input
        type="text"
        placeholder="Full name"
        className="input-auth"
        {...register("Fullname", { required: true })}
      />
      <input
        type="text"
        placeholder="Nickname"
        className="input-auth"
        {...register("nickname", { required: true })}
      />
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

export default SignUpPage;
