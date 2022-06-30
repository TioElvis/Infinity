import InputPassword from "components/InputPassword";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "services/auth";

function RegisterPage() {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await register({
      name: name,
      nickname: nickname,
      email: email,
      password: password,
    });
    if (res.status === 201) {
      navigate("/auth/login");
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
      onSubmit={handleRegister}>
      <form className="w-96 h-120 p-7 bg-form-backgound-auth">
        <h2>Register</h2>
        <div className="w-full mt-4 flex flex-col gap-1.5">
          <input
            type="text"
            placeholder="Name"
            onChange={({ target }) => {
              setName(target.value);
            }}
            className="input-Auth"
          />
          <input
            type="text"
            placeholder="Nickname"
            onChange={({ target }) => {
              setNickname(target.value);
            }}
            className="input-Auth"
          />
          <input
            type="email"
            placeholder="Email"
            onChange={({ target }) => {
              setEmail(target.value);
            }}
            className="input-Auth"
          />
          <InputPassword setPassword={setPassword} />
          <button
            onClick={handleRegister}
            className="w-40 h-8 ml-auto mr-auto mt-8 text-sm bg-button-backgound-auth text-white hover:opacity-70">
            Send
          </button>
        </div>
        <p className="mt-10 flex gap-3">
          Are you already registered?
          <Link to="/auth/login" className="text-link-color-auth">
            <p>click here</p>
          </Link>
        </p>
      </form>
    </div>
  );
}

export default RegisterPage;
