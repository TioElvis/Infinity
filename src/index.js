import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "pages/auth/register";
import LoginPage from "pages/auth/login";
import HomePage from "pages/home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile/:nickname" element={<></>} />
            <Route path="/post/:postId" element={<></>} />
          </Route>
        </Routes>
        <Routes>
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
