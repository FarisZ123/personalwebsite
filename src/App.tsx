import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import BoyfriendProposal from "./pages/BoyfriendProposal";
import Scrapbook from "./pages/GFDayLetter";
import OpenWhen from "./pages/OpenWhen";
import FirstSeeThis from "./openwhenletters/youfirstseethis";
import Navbar from "./components/Navbar";
import FeelLove from "./openwhenletters/feellove";
import "./App.css";

function App() {
  const [, setIsProjectsPage] = useState(false);
  useEffect(() => {
    const path = window.location.pathname;
    setIsProjectsPage(path === "/");
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home setIsProjectsPage={setIsProjectsPage} />}
        />
        <Route path="/proposal" element={<BoyfriendProposal />} />
        <Route path="/scrapbook" element={<Scrapbook />} />
        <Route path="/openwhen" element={<OpenWhen />} />
        <Route path="/firstseethis" element={<FirstSeeThis />} />
        <Route path="/feellove" element={<FeelLove />} />
      </Routes>
    </Router>
  );
}

export default App;
