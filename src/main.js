import HeaderComponent from "components/header";
import { AuthContext } from "contexts/auth";
import ProtectAppRoutes from "protect/app";
import { useContext } from "react";
import { Outlet } from "react-router-dom";

function Main() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <ProtectAppRoutes>
        {user && (
          <>
            <HeaderComponent />
            <Outlet />
          </>
        )}
      </ProtectAppRoutes>
    </>
  );
}

export default Main;
