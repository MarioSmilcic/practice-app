import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to={{ pathname: "/" }}>Home</Link>
      <Link to={{ pathname: "/about" }}>About</Link>
      <Link to={{ pathname: "/works" }}>Work</Link>
      <Link to={{ pathname: "/contact" }}>Contact</Link>
    </nav>
  );
};

export default Navigation;
