import React from "react";
import "../Works.css";
import Button from "../../../components/Button/Button";

const tags = [
  { id: 1, text: "All" },
  { id: 2, text: "UI/UX DESIGN" },
  { id: 3, text: "HTML & CSS" },
  { id: 4, text: "REACT JS" },
  { id: 5, text: "NODE JS" },
];

const Tags = () => {
  return (
    <div className="tags">
      {tags.map((tag) => (
        <Button key={tag.id} text={tag.text} />
      ))}
    </div>
  );
};

export default Tags;
