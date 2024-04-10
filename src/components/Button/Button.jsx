import "../Button.css";

const Button = ({ text, onTag, className }) => {
  return (
    <div>
      <button onClick={onTag} className={className}>
        {text}
      </button>
    </div>
  );
};

export default Button;
