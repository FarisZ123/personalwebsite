import CircularGallery from "../components/CircularGallery.tsx";
import image1 from "../assets/Open when...1.png";
import image2 from "../assets/Open when...2.png";
import Navbar from "../components/Navbar.tsx";
import { useEffect } from "react";

const items = [
  { image: image1, text: "", url: "/firstseethis" },
  { image: image2, text: "", url: "/feellove" },
  { image: "", text: "", url: "" },
  { image: "", text: "", url: "" },
  { image: "", text: "", url: "" },
  { image: "", text: "", url: "" },
  { image: "", text: "", url: "" },
  { image: "", text: "", url: "" },
  { image: "", text: "", url: "" },
  { image: "", text: "", url: "" },
];

export default function App() {
  useEffect(() => {
    document.querySelector(".nav")?.classList.add("nav-visible");
  }, []);
  return (
    <div style={{ height: "100vh", background: "#f6e9d9", paddingTop: "70px" }}>
      <Navbar />
      <CircularGallery items={items} />
    </div>
  );
}
