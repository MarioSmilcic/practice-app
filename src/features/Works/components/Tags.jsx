import "../Works.css";
import Button from "../../../components/Button/Button";

const tags = [
  { id: 1, text: "All", category: "All" },
  { id: 2, text: "UI/UX DESIGN", category: "design" },
  { id: 3, text: "HTML & CSS", category: "html&css" },
  { id: 4, text: "REACT JS", category: "reactJs" },
  { id: 5, text: "NODE JS", category: "nodeJs" },
];

const Tags = ({ onFilter, category }) => {
  return (
    <div>
      <div className="tags">
        {tags.map((tag) => (
          <Button
            key={tag.id}
            text={tag.text}
            onTag={() => onFilter(tag.category)}
            className={category === tag.category ? "button" : "inactive"}
          />
        ))}
      </div>
    </div>
  );
};

export default Tags;
