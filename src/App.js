import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "pages/home";
import Navbar from "components/Navbar";
import Profile from "pages/profile";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
