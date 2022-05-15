import "./App.css";
import { Route, Routes , } from "react-router-dom";
import Home from "pages/home";
import Navbar from "components/Navbar";
import Profile from "pages/profile";
import { AddPostProvider } from "contexts/AddPostContext";
import Login from "pages/auth/login";

function App() {
  return (
    <>
      <AddPostProvider>
        <Navbar />
      </AddPostProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
