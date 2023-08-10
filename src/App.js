import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Nutrition from "./Pages/Nutrition";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/nutrition" element={<Nutrition />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
