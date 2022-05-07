import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RecoilRoot } from "recoil";
import { AddPostProvider } from "contexts/AddPostContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <AddPostProvider>
        <App />
      </AddPostProvider>
    </RecoilRoot>
  </React.StrictMode>
);
