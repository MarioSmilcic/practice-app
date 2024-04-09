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

  /////OLD FILTER LOGIC/////
  // const filterByCategory = (category) => {
  //   const filteredProjects = selectedData.filter(
  //     (filtered) => filtered.category === category
  //   );

  //   setData(filteredProjects);
  // };

  const filterByCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <h2>My Works</h2>
      <div>
        {/* <button onClick={() => setSelectedCategory("All")}>All</button>
        <button onClick={() => setSelectedCategory("design")}>Ux/Ui</button>
        <button onClick={() => setSelectedCategory("nodeJs")}>Node</button>
        <button onClick={() => setSelectedCategory("html&css")}>html</button>
        <button onClick={() => setSelectedCategory("reactJs")}>React</button> */}
      </div>
      <Tags onFilter={filterByCategory} />
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
