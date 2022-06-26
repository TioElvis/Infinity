import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import LoginPage from "pages/Auth/Login";
import { RecoilRoot } from "recoil";
import HomePage from "pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/auth/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  </RecoilRoot>
);
