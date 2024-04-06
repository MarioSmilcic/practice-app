import React from "react";
import "../Works.css";
import Button from "../../../components/Button/Button";

const Tags = () => {
  return (
    <div className="tags">
      <Button text="All" />
      <Button text="UI/UX DESIGN" />
      <Button text="HTML & CSS" />
      <Button text="REACT JS" />
      <Button text="NODE JS" />
    </div>
  );
};

export default Tags;
