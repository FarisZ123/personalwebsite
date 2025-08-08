import { useState, useEffect } from "react";
import Home from "./pages/Home";
import "./App.css";

function App() {
  const [, setIsProjectsPage] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    setIsProjectsPage(path === "/");
  }, []);

  return <Home setIsProjectsPage={setIsProjectsPage} />;
}

export default App;

