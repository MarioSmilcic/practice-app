import "./About.css";
import AboutData from "./components/AboutData";
import Profile from "../../assets/profile3.png";
import Button from "../../components/Button/Button";

const About = () => {
  return (
    <div className="about">
      <h2>About me</h2>
      <div className="main">
        <div>
          <img src={Profile} alt="profilna" />
        </div>
        <div className="data">
          <h3>
            Hi, I am <span>Mario Smilcic</span>
          </h3>
          <AboutData />
          <Button text="Download Resume" className="button" />
        </div>
      </div>
    </div>
  );
};

export default About;
