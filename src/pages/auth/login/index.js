import InputPasswordComponent from "components/input-password";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "services/auth/login";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await login({ email: email, password: password });
    if (res.status === 201) {
      window.localStorage.setItem("loggedUserId", JSON.stringify(res.data.id));
      window.localStorage.setItem(
        "loggedToken",
        JSON.stringify(res.data.token)
      );
      navigate("/");
    }
  };

  const loggedUserId = window.localStorage.getItem("loggedUserId");

  useEffect(() => {
    if (loggedUserId) {
      navigate("/");
    }
  }, []);

  return (
    <div
      className="w-screen h-screen bg-auth-background text-white grid place-content-center"
      onSubmit={handleLogin}>
      <form className="w-96 h-96 p-7 bg-form-backgound-auth">
        <h2>Login</h2>
        <div className="w-full mt-4 flex flex-col gap-1">
          <input
            type="email"
            placeholder="Email"
            onChange={({ target }) => {
              setEmail(target.value);
            }}
            className="input-Auth"
          />
          <InputPasswordComponent setPassword={setPassword} />
          <button
            onClick={handleLogin}
            className="w-40 h-8 ml-auto mr-auto mt-8 text-sm bg-button-backgound-auth text-white hover:opacity-70">
            Send
          </button>
        </div>
        <p className="mt-10 flex gap-3">
          You are not registered?
          <Link to="/auth/register" className="text-link-color-auth">
            click here
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
