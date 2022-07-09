import "./index.css";
import App from "./app";
import React, { StrictMode } from "react";
import { RecoilRoot } from "recoil";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "contexts/auth";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <RecoilRoot>
      <AuthProvider>
        <App />
      </AuthProvider>
    </RecoilRoot>
  </StrictMode>
);
