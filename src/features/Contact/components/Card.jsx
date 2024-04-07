import "../Contact.css";

const Card = ({ icon, title, data, data2 }) => {
  return (
    <div className="card">
      <div className="cardContainer">
        {icon}
        <div>
          <h4>{title}</h4>
          <p>{data}</p>
          <p>{data2}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
