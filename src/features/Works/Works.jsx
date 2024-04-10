import Tags from "./components/Tags";
import { useState } from "react";
import Card from "./components/Card";
import "./Works.css";
import { projects } from "./components/projects";

const Works = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const filterByCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <h2>My Works</h2>

      <Tags onFilter={filterByCategory} category={selectedCategory} />
      <div className="projects">
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            imgUrl={project.imgUrl}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Works;
