import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "pages/home";
import Navbar from "components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
