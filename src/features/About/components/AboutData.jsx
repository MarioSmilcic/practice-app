import React from "react";
import ListData from "./ListData";
import "../About.css";

const data = [
  { info: "First name", value: "Mario", id: 1 },
  { info: "Last name", value: "Smilcic", id: 2 },
  { info: "Age ", value: "37", id: 3 },
  { info: "Nationality", value: "American", id: 4 },
  { info: "Languages", value: "English", id: 5 },
  { info: "Address", value: "Jaroslava Plecitija 16", id: 6 },
  { info: "Freelance", value: "Available", id: 7 },
];

const AboutData = () => {
  return (
    <div className="about">
      <ul>
        {data.map((data) => (
          <ListData key={data.id} info={data.info} value={data.value} />
        ))}
      </ul>
    </div>
  );
};

export default AboutData;
