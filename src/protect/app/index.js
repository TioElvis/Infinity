import useAuth from "hooks/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectAppRoutes({ children }) {
  const { isLogged } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) navigate("/auth/sign-in");
  }, [isLogged, navigate]);

  return <>{isLogged && <>{children}</>}</>;
}

export default ProtectAppRoutes;
