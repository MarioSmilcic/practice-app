import "../About.css";

const ListData = ({ info, value }) => {
  return (
    <div className="listData">
      <li> {info}</li>
      <div>: {value}</div>
    </div>
  );
};

export default ListData;
