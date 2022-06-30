import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { useState } from "react";

function InputPassword({ setPassword }) {
  const [showP, setShowP] = useState(false);

  const showPassword = () => {
    setShowP(true);
  };

  const hiddenPassword = () => {
    setShowP(false);
  };

  return (
    <>
      <div className="flex relative">
        <input
          type={showP ? "text" : "password"}
          onChange={({ target }) => {
            setPassword(target.value);
          }}
          placeholder="Password"
          autoComplete="on"
          className="input-Auth"
        />
        <span className="absolute top-3.5 right-4 text-white">
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
