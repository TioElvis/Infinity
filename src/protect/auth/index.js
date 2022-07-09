import useAuth from "hooks/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectAuthRoutes({ children }) {
  const { isLogged } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) navigate("/");
  }, [isLogged, navigate]);

  return <>{!isLogged && <>{children}</>}</>;
}

export default ProtectAuthRoutes;
