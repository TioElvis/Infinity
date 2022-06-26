import "./index.css";
import InputPassword from "components/InputPassword";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "services/auth";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

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
    <div className="login" onSubmit={handleLogin}>
      <form className="loginForm">
        <h2>Login</h2>
        <div>
          <input type="email" placeholder="Email" onChange={handleEmail} />
          <InputPassword setPassword={setPassword} />
          <button onClick={handleLogin}>Send</button>
        </div>
        <p style={{ marginTop: 40 }}>
          Are you already registered?
          <Link to="/auth/register">
            <p>click here</p>
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
