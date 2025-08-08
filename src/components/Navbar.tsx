import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => (
  <div className="nav">
    <Link to="/">Home</Link>
    <Link to="/proposal">Proposal</Link>
    <Link to="/scrapbook">Scrapbook</Link>
    <Link to="">Secret</Link>
  </div>
);

export default Navbar;
