import login from "hooks/useLogin";
import { useState } from "react";
import "./index.css";

function Login() {
  const [email, setEmail] = useState("");
  const [passsword, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await login({ email: email, password: passsword });
    window.localStorage.setItem("loggedUser", JSON.stringify(res));
  };

  return (
    <div>
      <form></form>
      <input
        type="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={handleLogin}>send</button>
    </div>
  );
}

export default Login;
