import Main from "main";
import SignInPage from "pages/auth/sign-in";
import SignUpPage from "pages/auth/sign-up";
import HomePage from "pages/home";
import ProfilePage from "pages/profile";
import ProtectAuthRoutes from "protect/auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile/:nickname" element={<ProfilePage />} />
        </Route>
      </Routes>
      <Routes>
        <Route
          path="/auth/sign-in"
          element={
            <ProtectAuthRoutes>
              <SignInPage />
            </ProtectAuthRoutes>
          }
        />
        <Route
          path="/auth/sign-up"
          element={
            <ProtectAuthRoutes>
              <SignUpPage />
            </ProtectAuthRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
