import React from "react";
import "./Home.css";
import ProfileImg from "./components/ProfileImg";
import Socials from "./components/Socials";

const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <ProfileImg src="ProfileImg" alt="Profilna" />
      <h1>
        Hi, i am <span>Mario Smilcic</span>
      </h1>
      <p>
        I am a frontend web developer. I can provide clean code and pixel
        perfect design. I also make website more & interactive with web
        animations
      </p>
      <Socials />
    </div>
  );
};

export default Home;
