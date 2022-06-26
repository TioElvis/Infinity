import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { useState } from "react";
import "./index.css";

function InputPassword({ setPassword }) {
  const [showP, setShowP] = useState(false);

  const showPassword = () => {
    setShowP(true);
  };

  const hiddenPassword = () => {
    setShowP(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div className="inputPassword">
        <input
          type={showP ? "text" : "password"}
          onChange={handlePassword}
          placeholder="Password"
          autoComplete="on"
        />
        <span>
          {showP ? (
            <EyeIcon className="icon" onClick={hiddenPassword} />
          ) : (
            <EyeOffIcon className="icon" onClick={showPassword} />
          )}
        </span>
      </div>
    </>
  );
}

export default InputPassword;
