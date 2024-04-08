import "../Button.css";

const Button = ({ text, onTag }) => {
  return (
    <div>
      <button onClick={onTag} className="button">
        {text}
      </button>
    </div>
  );
};

export default Button;
