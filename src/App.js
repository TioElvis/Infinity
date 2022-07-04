import "./App.css";
import { loadingUserState } from "atoms/user";
import { useRecoilValue } from "recoil";
import { Outlet } from "react-router-dom";
import LoadingUserComponent from "components/loading-user";
import HeaderComponent from "components/header";
import { CreatePostProvider } from "context/create-post";

function App() {
  const loadingUser = useRecoilValue(loadingUserState);

  return (
    <>
      {loadingUser ? (
        <LoadingUserComponent />
      ) : (
        <>
          <CreatePostProvider>
            <HeaderComponent />
          </CreatePostProvider>
          <Outlet />
        </>
      )}
    </>
  );
}

export default App;
