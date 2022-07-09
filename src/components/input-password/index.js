import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { useState } from "react";

function InputPassword({ register }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex relative">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        autoComplete="on"
        className="input-auth"
        {...register}
      />
      <span className="absolute top-4 right-4 text-white">
        {showPassword ? (
          <EyeIcon
            className="icon"
            onClick={() => {
              setShowPassword(false);
            }}
          />
        ) : (
          <EyeOffIcon
            className="icon"
            onClick={() => {
              setShowPassword(true);
            }}
          />
        )}
      </span>
    </div>
  );
}

export default InputPassword;
