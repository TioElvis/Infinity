import "./App.css";
import { useRecoilValue } from "recoil";
import { loadingUserState } from "atoms/userAtoms";
import LoadingUserComponent from "components/LoadingUser";
import { Outlet } from "react-router-dom";
import { CreatePostProvider } from "context/CreatePostContext";
import Navbar from "components/Navbar";

function App() {
  const loadingUser = useRecoilValue(loadingUserState);

  return (
    <>
      {loadingUser ? (
        <LoadingUserComponent />
      ) : (
        <>
          <CreatePostProvider>
            <Navbar />
          </CreatePostProvider>
          <Outlet />
        </>
      )}
    </>
  );
}

export default App;
