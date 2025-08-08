import { useEffect } from "react";
import React from "react";
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from 'react-icons/vsc';
import "../App.css";
import "../pages/Home.css";
import Aurora from "../components/Aurora";
import ShinyText from "../assets/ShinyText";
import Dock from "../assets/Dock";

interface HomeProps {
  setIsProjectsPage: React.Dispatch<React.SetStateAction<boolean>>;
}
const items = [
  { icon: <VscHome size={18} color="ffffff" />, label: 'Home', onClick: () => alert('Home!') },
  { icon: <VscArchive size={18} color="ffffff" />, label: 'Archive', onClick: () => alert('Archive!') },
  { icon: <VscAccount size={18} color="ffffff" />, label: 'Profile', onClick: () => alert('Profile!') },
  { icon: <VscSettingsGear size={18} color="ffffff" />, label: 'Settings', onClick: () => alert('Settings!') },
];

const Home: React.FC<HomeProps> = ({ setIsProjectsPage }) => {
  useEffect(() => {
    setIsProjectsPage(false);
  }, [setIsProjectsPage]);

  return (
    

<div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 0,
      pointerEvents: "none",
      background: "#141734",
    }}
  >
    <Aurora
      colorStops={["#703f6e", "#a2f0c3", "#2a5178"]}
      blend={0.5}
      amplitude={1.0}
      speed={0.5}
    />
  </div>

  <div style={{ position: "relative", zIndex: 1, textAlign: "center", paddingTop: "20vh" }}>
      <ShinyText className="intro-text" text="Hi, My Name is" /> <br />
      <ShinyText className="intro-text" text="Faris Zulhazmi" /> <br /> <br />
      <ShinyText className="intro-subtext" text="Welcome to my personal website" />
  </div>
    <Dock 
    items={items}
    panelHeight={68}
    baseItemSize={50}
    magnification={70}
  />
</div>

  );
};


export default Home;
