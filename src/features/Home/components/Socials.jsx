import { Link } from "react-router-dom";
import "../Home.css";

import Facebook from "./Facebook";
import LinkedIn from "./LinkedIn";
import Twitter from "./Twitter";
import GitHub from "./GitHub";
import Instagram from "./Instagram";

const Socials = () => {
  return (
    <div className="socials">
      <Link to={{ pathname: "/" }}>
        <Facebook />
      </Link>
      <Link to={{ pathname: "/" }}>
        <Twitter />
      </Link>
      <Link to={{ pathname: "/" }}>
        <GitHub />
      </Link>
      <Link to={{ pathname: "/" }}>
        <LinkedIn />
      </Link>
      <Link to={{ pathname: "/" }}>
        <Instagram />
      </Link>
    </div>
  );
};

export default Socials;
