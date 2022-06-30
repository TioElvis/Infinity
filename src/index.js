import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import LoginPage from "pages/Auth/Login";
import { RecoilRoot } from "recoil";
import HomePage from "pages/Home";
import ProfilePage from "pages/Profile";
import { StrictMode } from "react";
import PostPage from "pages/PostPage";
import RegisterPage from "pages/Auth/Register";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile/:nickname" element={<ProfilePage />} />
            <Route path="/post/:postId" element={<PostPage />} />
          </Route>
        </Routes>
        <Routes>
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </StrictMode>
);
